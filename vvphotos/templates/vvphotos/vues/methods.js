{% load i18n %}
loadAlbum: function(resturl, album) {
	function action(data) {
		app.flush("albums");
		app.activate(["albums", "photos", "album"]);
		albums = data.children;
		if (albums.length>0) {
			//console.log("ALBUMS mapping: "+albums);
			app.albums = albums;
		} /*else {
			console.log("NO albums to map")
		}*/
		app.photos = data.photos;
		app.album = data;
		document.title = album;
		app.currentImg = 0;
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
getThumb: function(img) {
	var url = img+".100x100_q85.jpg";
	console.log("TH! "+url);
	return url
},
next: function() {
	var total = this.photos.length;
	if (this.currentImg == (total-1)) {
		this.currentImg = 0
	} else if (this.currentImg < (total-1)){
		this.currentImg++
	}
	this.imgSrc = this.photos[this.currentImg]
},
prev: function() {
	var total = this.photos.length; 
	if (this.currentImg > 0){
		this.currentImg--
	} else if (this.currentImg == 0){
		this.currentImg = (total-1)
	}
	this.imgSrc = this.photos[this.currentImg]
},