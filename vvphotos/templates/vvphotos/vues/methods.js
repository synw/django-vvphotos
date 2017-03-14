{% load i18n %}
loadAlbum: function(resturl, album) {
	function action(data) {
		app.flush("albums");
		app.activate(["albums", "photos"]);
		albums = data.children;
		if (albums.length>0) {
			console.log("ALBUMS mapping: "+albums);
			app.albums = albums;
		} else {
			console.log("NO albums to map")
		}
		app.photos = data.photos;
		document.title = album;
	}
	app.loadData(resturl, action);
},
loadAlbums: function(resturl) {
	function action(data) {
		//console.log("ALBUMS DATA", JSON.stringify(data));
		app.flush("albums");
		app.albums = data;
		app.activate(["albums"]);
		document.title = "{% trans 'Photos' %}"
	}
	app.loadData(resturl, action);
},