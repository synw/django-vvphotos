{% load i18n %}
loadAlbum: function(resturl, album) {
	function action(data) {
		albums = data.children;
		//console.log("ALBUM DATA", app.str(albums));
		if (albums.length>0) {
			//console.log("ALBUMS mapping: "+albums);
			app.albums = albums;
		} /*else {
			console.log("NO albums to map")
		}*/
		for (i=0;i<data.photos.length;i++) {
			data.photos[i].image = app.getImage(data.photos[i].image);
		}
		//console.log("PHOTOS:", app.str(data.photos));
		app.flush("albums");
		app.activate(["albums", "photos", "album"]);
		app.photos = data.photos;
		app.album = data;
		document.title = album;
		app.currentImg = 0;
		app.imgHeight = document.getElementById("slider-img").height;
		console.log(document.getElementById("slider-img"), "HEIGHT:", app.imgHeight);
	}
	this.loadData(resturl, action);
},
loadAlbums: function(resturl) {
	function action(data) {
		//console.log("ALBUMS DATA", JSON.stringify(data));
		app.flush("albums");
		app.albums = data;
		app.activate(["albums", "album"]);
		document.title = "{% trans 'Photos' %}";
		app.album = app.albums[0];
	}
	this.loadData(resturl, action);
},
getImage: function(imgurl) {
	var width = this.getScreenWidth();
	var thumb = true;
	if (width < 361) {
		imgurl = imgurl.replace(".jpg", "_thumbnail.jpg");
	} else if (width > 360 && width < 641) {
		imgurl = imgurl.replace(".jpg", "_small.jpg");
	} else if (width > 640 && width < 801) {
		imgurl = imgurl.replace(".jpg", "_medium.jpg");
	} else if (width > 800 && width < 1201) {
		imgurl = imgurl.replace(".jpg", "_big.jpg");
	} else if (width > 1200) {
		thumb = false;
	}
	if (thumb === true) {
		imgurl = imgurl.replace("uploads", "_versions");
	}
 	var url = "/media/"+imgurl;
	return url
},
getScreenWidth: function() {
	var w = window;
	var d = document;
	var e = d.documentElement;
	var g = document.body;
	var x = w.innerWidth || e.clientWidth || g.clientWidth;
	return x
},
showPhotoBtn: function() {
	document.getElementById("btn-next").style.display = "block";
	document.getElementById("btn-prev").style.display = "block";
},
hidePhotoBtn: function() {
	document.getElementById("btn-next").style.display = "none";
	document.getElementById("btn-prev").style.display = "none";
},
next: function() {
	var total = this.photos.length;
	if (this.currentImg == (total-1)) {
		this.currentImg = 0
	} else if (this.currentImg < (total-1)){
		this.currentImg++
	}
},
prev: function() {
	var total = this.photos.length; 
	if (this.currentImg > 0){
		this.currentImg--
	} else if (this.currentImg == 0){
		this.currentImg = (total-1)
	}
},
fs: function() {
	requestFullScreen(document.body);
	this.showHeader = false;
},