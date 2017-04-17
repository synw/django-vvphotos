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
		console.log("PHOTOS:", app.str(data.photos));
		app.flush("albums");
		app.pushActivate(["albums", "photos", "album"]);
		app.photos = data.photos;
		app.album = data;
		document.title = album;
		app.currentImg = 0;
	}
	this.loadData(resturl, action);
},
loadAlbums: function(resturl) {
	function action(data) {
		console.log("ALBUMS DATA", JSON.stringify(data));
		app.flush("albums");
		app.albums = data;
		app.activate(["albums", "album"]);
		document.title = "{% trans 'Photos' %}";
		app.album = app.albums[0];
	}
	this.loadData(resturl, action);
},
getImage: function(img) {
	var url = "/media/"+img;
	return url
},
next: function() {
	var total = this.photos.length;
	if (this.currentImg == (total-1)) {
		this.currentImg = 0
	} else if (this.currentImg < (total-1)){
		this.currentImg++
	}
	//this.imgSrc = this.photos[this.currentImg]
},
prev: function() {
	var total = this.photos.length; 
	if (this.currentImg > 0){
		this.currentImg--
	} else if (this.currentImg == 0){
		this.currentImg = (total-1)
	}
	//this.imgSrc = this.photos[this.currentImg]
},