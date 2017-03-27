var slider = document.getElementById('slider');
var mc = new Hammer(slider);
mc.on("swipeleft", function(ev) {
    app.prev();
});
mc.on("swiperight", function(ev) {
	app.next();
});