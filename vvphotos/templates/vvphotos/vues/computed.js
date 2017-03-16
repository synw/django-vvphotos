showPhotos: {
	get: function () {
		if (this.photos.length == 0) {
			return "none"
		}
		return "block"
	},
	set: function (newValue) {
		if (this.photos.length == 0) {
			return "none"
		}
		return "block"
	}
},
showAlbum: {
	get: function () {
		if (Object.keys(this.album).length == 0) {
			return "none"
		}
		return "block"
	},
	set: function (newValue) {
		if (Object.keys(this.album).length == 0) {
			return "none"
		}
		return "block"
	}
},