+++
title = "The method resetTransform of SCNPhysicsBody"
date = 2015-02-04T18:11:46+08:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Cocoa", "SceneKit"]
categories = ["tech"]

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
caption = "Some features of resetTransform."

+++

<!-- {% include JB/setup %} -->

According to the SceneKit document, the function of `resetTransform` is: 

> Updates the position and orientation of a body in the physics simulation to match that of the node to which the body is attached.

Through experiment, I found this is little special.

If you do this: 

```swift
var node = SCNNode(geomentry: SCNBox())
node.position = SCNVector3(0, 1, 0)
node.rotation = SCNVector4(1, 0, 0, CGFloat(M_PI)/2)
node.physicsBody = SCNPhysicsBody(type: .Dynamic, nil)
scene.rootNode.addChildNode(node)
```

If you get the `position` and `rotation` of `node.presentationNode()` in the render delegate, where I mean you need to get the latest and real data, you will found the effect of the setup of node's position and rotation is not work at the begining.

At the begining, the `position` will be `(0, 0, 0)`, but not what you have set, `(0, 1, 0)`.

If you have read the document about `SCNNode.position` and `SCNNode.rotation`, you will found:

> position
> 
> The translation applied to the node. __Animatable__.

The __Animatable__ means it will take several frames to get the effect.

However, it's different when you use resetTransform of SCNPhysicsBody:

```swift
var node = SCNNode(geomentry: SCNBox())
node.position = SCNVector3(0, 1, 0)
node.rotation = SCNVector4(1, 0, 0, CGFloat(M_PI)/2)
node.physicsBody = SCNPhysicsBody(type: .Dynamic, nil)
scene.rootNode.addChildNode(node)
node.physicsBody.resetTransform()
```

The effect will work at the begining.
