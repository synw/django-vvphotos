loadAlbum: function(resturl) {
	function action(data) {
		console.log("ALBUM DATA", JSON.stringify(data));
	}
	app.loadData(resturl, action);
},
loadAlbums: function(resturl) {
	function action(data) {
		console.log("ALBUMS DATA", JSON.stringify(data));
	}
	app.loadData(resturl, action);
},