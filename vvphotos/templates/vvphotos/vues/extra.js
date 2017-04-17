function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

function show_control_prev() {
	var btn_prev = document.getElementById("btn_prev")
	var prev = document.getElementById("prev");
	btn_prev.addEventListener("mouseover",function(){
		prev.style.display="block";
	});
	
	btn_prev.addEventListener("mouseout",function(){
		prev.style.display="none";
	});
}
show_control_prev();
		
function show_control_next() {
	var btn_next = document.getElementById("btn_next")
	var next = document.getElementById("next");
	btn_next.addEventListener("mouseover",function(){
		next.style.display="block";
	});
	
	btn_next.addEventListener("mouseout",function(){
		next.style.display="none";
	});
}
show_control_next();

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

