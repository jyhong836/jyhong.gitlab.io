+++
title = "Make text table view(NSTableView) auto resize"
date = 2015-08-04T18:11:20+08:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["OS X", "Xcode", "Cocoa"]
categories = ["tech"]

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
caption = "It's about how to make a iMessage-like chat table view."

+++

<!-- {% include JB/setup %} -->

To make a iMessage-like chat table view, there is several steps to follow:

1. Text field should be able to adjust its size automatically.
2. Image view of bubble should adjust automatically relative to text field.
3. Table view's row should be fitted into the row cell's subview, which include text field and image view.
4. Let scroller auto scroll to bottum.

Here I use View-based NSTableView to make these:

{{< figure src="/img/post/table_view_settings.png" title="Table view settings" width="40%" numbered="true" >}}

There is some import constraints to make the three components, NSImageView, NSTextField, NSTableViewCell, keep corresponded size, which is showed below:

{{< figure src="/img/post/cell_constraint.png" title="Cell contraint settings" width="80%" numbered="true" >}}

You should set NSTextField like below, which will make it auto adjust size to text:

{{< figure src="/img/post/text_field_settings.png" title="Text field settings" width="40%" numbered="true" >}}

Then use NSTableViewDelegate to adjust height. Read this post: [NSTableView automatically adjust height to fit cell view](/post/2015-08-04-nstableview-automatically-adjust-height-to-fit-cell-view/).


Finally, when you add a new row at bottum, you will hope the scroller to scroll to bottum.

```swift
dispatch_async(dispatch_get_main_queue(), { () -> Void in
    // tableView is IBOutlet refer to table view.
    self.tableView.insertRowsAtIndexes(NSIndexSet(index: self.tableView.numberOfRows), withAnimation: NSTableViewAnimationOptions.EffectNone)
    self.tableView.noteHeightOfRowsWithIndexesChanged(NSIndexSet(index: self.tableView.numberOfRows - 1))
    // scroll
    self.tableView.scrollRowToVisible(self.tableView.numberOfRows - 1)
})
```

