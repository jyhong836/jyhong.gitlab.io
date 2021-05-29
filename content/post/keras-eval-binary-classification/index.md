+++
title = "Evaluate Binary Classification with Keras"
date = 2018-11-15T23:24:41-05:00
draft = false

math = true

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["Junyuan Hong"]

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Keras", "Machine Learning"]
categories = ["machine-learning"]

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["deep-learning"]` references 
#   `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
# projects = ["internal-project"]

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
[image]
  # Caption (optional)
  caption = ""

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""
+++

[Keras](keras.io) provides very convenient tools for fast protyping Machine Learning models, especially neural networks. You can pass [metric functions](https://keras.io/metrics/) when compiling a model, to evaluate the learnt models. However in the current version (after v2.0.0), Keras no longer provides widely used binary-classification metrics, e.g., recall, f1score, etc. The reason is clearly explained in [keras issue #5794](https://github.com/keras-team/keras/issues/5794#issuecomment-287641301). In this posts, we are going to dicuss a working-around to evaluate these metrics with Keras. 

<!--more--->

## Why not use global metrics 

That is the metrics evaluated in Keras are batch-wise only. The epoch output metric values are averaged like: $${\sum \text{(batch metric)} * \text{(batch size)} \over \text{(# batch)} * \text{(batch size)}}$$. This is okay for batch-wise metric like accuracy: $${\sum \text{(batch #TP + #TN)/(batch size)} * \text{(batch size)} \over \text{(# batch)} * \text{(batch size)}} = {\text{(#TP + #TN)} \over \text{(total #sample)}}$$. For global metrics, e.g., recall, the average is improper: $${\sum \text{(batch #TP)/(batch #TP + #FN)} * \text{(batch size)} \over \text{(# batch)} * \text{(batch size)}} \neq {\text{(#TP)} \over \text{(total #TP + #FN)}}$$. Of course, when you use a relatively large batch size and a large number of batches, the average will be close to the global value. However, there will aften be a large gap between the average and global value. Especially for AUC value, the computation is danguous.

If you don't mind the bias caused by the average, you could use metrics passed to `model.compile(...)`, e.g.:
```py
def recall(y_true, y_pred, is_categorical=True):
    """Recall metric.	
     Only computes a batch-wise average of recall.	
     Computes the recall, a metric for multi-label classification of	
    how many relevant items are selected.	
    """
    true_positives = K.sum(K.round(K.clip(y_true * y_pred, 0, 1)))
    possible_positives = K.sum(K.round(K.clip(y_true, 0, 1)))
    recall = true_positives / (possible_positives + K.epsilon())
    return recall
```
It is notable that the `K.epsilon()` has to be used in the division, because `possible_positives` could be zero in one batch.

## Existing solutions

### Batch-wise estimation

In addtion to the example mentioned above, there are some discussion on the batch-wise estimation.

1. Decorate tensorflow metrics: [How to calculate precision and recall in Keras](https://stackoverflow.com/a/50566908/3503604), which seems not working now.
2. 

## Better Practice

### Predict and evaluate metrics

Compute the global metric value on epoch end.
```py
class Metrics(keras.callbacks.Callback):
    def __init__(self, validation_data):
        self.validation_data = validation_data
    def on_epoch_end(self, batch, logs={}):
        predict = np.asarray(self.model.predict(self.validation_data[0]))
        targ = self.validation_data[1]
        self.f1s=f1(targ, predict)
        return
metrics = Metrics([X_test,y_test])
model.fit(X_train, y_train, epochs=epochs, batch_size=batch_size, validation_data=[X_test,y_test], 
       verbose=1, callbacks=[metrics])
```
[Source codes from [comment in Keras issue # 5794](https://github.com/keras-team/keras/issues/5794#issuecomment-303683985)]

However, this solution will be time-comsuming to run `model.predict` on the epoch end. The prediction procdure is actually evaluated during training. The repitation is wasteful.

### A keras-metrics package

One thought to tackle the issue is to fetch predictions from the model and then evaluate metrics. A close solution is given in [keras-metrics](https://github.com/netrack/keras-metrics). In the package, they create a class to store history record of true positive, false positive and so on. However the test case and example given by the authors cannot demonstrate the effectiveness. One drawback of their solution is that they do not solve the *averaging* problem. 

However, the keras-metrics package is only effective in the Keras (>=v2.1.6) which will avoid averaging metrics which are stateful [Layer](https://github.com/keras-team/keras/blob/75a35032e194a2d065b0071a9e786adf6cee83ea/keras/engine/base_layer.py#L22) instances. Look at [BaseLogger](https://github.com/keras-team/keras/blob/75a35032e194a2d065b0071a9e786adf6cee83ea/keras/callbacks.py#L204)

### Official updates in Keras v2.1.6 for stateful metrics

Until today, there has been some updates in Keras. You can find Pull-Request: [PR#9253: Add support for stateful metrics.](https://github.com/keras-team/keras/pull/9253) and [PR#9446: General stateful metrics fixes](https://github.com/keras-team/keras/pull/9446).
However there is still no official metrics for recall, f1score etc.

### Customize stateful metrics

If you have update Keras to `v2.1.6` which supports 'stateful metrics', then you can try to customize some metric like the one in [StackOverflow](https://stackoverflow.com/a/51412555/3503604).

The best reference is the [BinaryTruePositives](https://github.com/keras-team/keras/blob/75a35032e194a2d065b0071a9e786adf6cee83ea/tests/keras/metrics_test.py#L127) class provided by Keras test case.
