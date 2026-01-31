var images = ['header-background.jpg', 'bgImage2.png', 'bgImage3.jpg', 'bgImage7.jpg'];
var preloadImages = function() {
    for (var i = 0; i < images.length; i++) {
        (new Image()).src = images[i];
    }
}
preloadImages();