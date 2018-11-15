+++
title = "Python Decorator"
date = 2018-11-15T11:47:06-05:00
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["Junyuan Hong"]

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Python"]
categories = ["tech"]

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

When refactoring a codes, we need to extract duplicated features from different methods or functions. A magic in Python 3 is to decorate the a striped basic functions with sharing features.

<!--more-->

## What is decorator?

A (almost) minimal demo:
```python
from functools import wraps
def my_decorator(func):
  # to make sure func name are included.
  @wraps(func)
  def wrapper(x):
    """ function wrapper of my_decorator """
    print(" Hi, ") + func.__name__ + " return.")
    return func(x)
  return wrapper

# use decorator
@my_decorator
def foo(x):
  return x + 1

foo(10)
```

## Why decorator?

1. [Memoization](https://www.python-course.eu/python3_memoization.php#callable%20class): speed up function evaluation by storing the `{input: output}` dict.
2. Decorate a function with additional processes which probably are duplicated from other funcs. For example, you can count the evaluation times in a decorator.

## Use class as a decorator

You can transform class into function by adding a `__call__` method to the class.

Decorator demo:
```python
class my_decorator:
  def __init__(self, f):
    self.f = f
  
  def __call__(self):
    print("Decorating ", self.f.__name__)
    self.f()

@my_decorator
def foo():
  print("hello from foo")
```

Further reading: [Python3 decorators tutorial](https://www.python-course.eu/python3_decorators.php)
