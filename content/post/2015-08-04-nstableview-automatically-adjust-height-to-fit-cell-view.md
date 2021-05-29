+++
title = "NSTableView automatically adjust height to fit cell view"
date = 2015-08-04T18:11:46+08:00
draft = false

tags = ["OS X", "Xcode", "Cocoa"]
categories = ["tech"]

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
caption = ""
+++

<!-- {% include JB/setup %} -->

Reference: [Using auto-layout to calculate table cell height](http://blog.amyworrall.com/post/66085151655/using-auto-layout-to-calculate-table-cell-height)

In '[Using auto-layout to calculate table cell height](http://blog.amyworrall.com/post/66085151655/using-auto-layout-to-calculate-table-cell-height)', it's introduced how to use auto-layout to update table view's (UITableView) cell height with Objective-C language. However there is different at NSTableView.

Here I will introduce to do similar thing at NSTableView with Swift language. Remember one thing post 'Using auto-layout to calculate table cell height' has warned that this method is not that efficient, figure out the way make it more efficient yourself.

Assuming you have been familiar with the mechanism of NSTableView, including NSTableViewDelegate and NSTableViewDataSource, I will not introduce these knowledge in detail below.

When configure table cell view, it's helpful later if you seperate some configure functions.

```swift
func tableView(tableView: NSTableView, viewForTableColumn tableColumn: NSTableColumn?, row: Int) -> NSView? {
    var cell = tableView.makeViewWithIdentifier("InMessageCellView", owner: self)
    if let cl = cell {
        // Do data configures in 'configureCell' function.
        cell = configureCell(cl, row: row)
    }
    return cell
}
```

Then tell NSTableView the height of row:

```swift
let defaultRowHeight = CGFloat(36)
func tableView(tableView: NSTableView, heightOfRow row: Int) -> CGFloat {
    var cell = tableView.makeViewWithIdentifier("InMessageCellView", owner: self)
    if let cl = cell {
        cell = configureCell(cl, row: row)
        // Let NSView to update its layout automatically.
        cell!.layoutSubtreeIfNeeded()
        // Return the updated frame height.
        // Remember to setup constraints in Xcode's stroyboard, which should limit 
        // the cell's height corespond to subview(like text view).
        return cell!.frame.height
    }
    return defaultRowHeight
}
```

Refer from Apple's documentation:

> Although table views may cache the returned values, you should ensure that this method is efficient.

So be careful about performance, read more about it to visit reference[^1] .

### Reference

[^1]: [Using Auto Layout in UITableView for dynamic cell layouts & variable row heights](http://stackoverflow.com/questions/18746929/using-auto-layout-in-uitableview-for-dynamic-cell-layouts-variable-row-heights)
