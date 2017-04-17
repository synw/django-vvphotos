function requestFullScreen(element) {
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
    if (requestMethod) {
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") {
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}
var slider = document.getElementById('slider');
var mc = new Hammer(slider);
mc.on("swipeleft", function(ev) {
    app.prev();
});
mc.on("swiperight", function(ev) {
	app.next();
});
document.onkeydown = function(evt) {
    var evt = evt || window.event;
    switch (evt.keyCode) {
        case 37:
        	app.prev();
            break;
        case 39:
        	app.next();
            break;
    }
};
function onFullScreenChange() {
  var fullscreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
  if (fullscreen === undefined) {
	  app.showHeader = true;
  }
}
document.addEventListener("fullscreenchange", onFullScreenChange, false);
document.addEventListener("webkitfullscreenchange", onFullScreenChange, false);
document.addEventListener("mozfullscreenchange", onFullScreenChange, false);

