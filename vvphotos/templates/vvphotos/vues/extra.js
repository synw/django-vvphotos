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