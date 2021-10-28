# pollex

`pollex` is a very simple implementation of modal images.  The intention is to use it for thumbnail images that, when clicked, will show full size or larger resolution versions.  The word "pollex" means "thumb" in Latin.

## Usage

Add your thumbnail images to your HTML and include the following data attribute:

	data-pollex-dest

Example: `<img src="/img/thumb.jpg" data-pollex-dest="/img/full.jpg" />`

Then, just include the build source of pollex anywhere in your HTML file.

	<script src="/js/pollex.js"></script>

Pollex will run automatically when the DOM content is ready.

If you'd like to add a caption to the image, you can add one with the `data-pollex-caption` attribute.  The caption is entirely optional and may include HTML.

	<img src="/img/thumb.jpg" data-pollex-dest="/img/full.jpg" data-pollex-caption="This is the caption" />

You may add CSS styling to your full size images with the `.pollex-image` class name.  Likewise, captions have the `.pollex-caption` class name.

## Missing features

`pollex` is a very basic modal image implementation.  The following are not currently implemented (and may never be):

* Eager loading of full scale images
* Rescanning for new images as items are dynamically added to the page
* More customization options
* "Loading" spinner

## Why?

If you do an internet search for `javascript lightbox`, you can find a lot of implementations of modal images.  There's little reason for me to reimplement it on the basis of functionality.

That said, I didn't really *want* to take a third party dependency.  I didn't want to evaluate an appropriate library, figure out any subdependencies, set everything up, learn how to use it, and then worry about whether I should have evaluated the source code.

Lightboxes are also really simple but the existing implementations are bloated.  I found one that advertised simplicity but wound up being over 50kb of Javascript and requiring importing a CSS file as well as the code.  The current version of pollex is <3Kb and has no other dependencies.

The why here is then quite simple: I could do it in an afternoon, it'd meet my needs, and it'd be only what I need.  Also, it's fun to build things.  It will be imperfect and won't be fancy, but it'll be exactly what I need when I need it.
