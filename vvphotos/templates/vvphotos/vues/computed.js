showPhotos: function () {
	if (this.photos.length === 0) {
		return false
	}
	return true
},
showAlbums: function() {
	if (this.isActive("albums") === false) {
		return false
	}
	return true
},
showAlbum: function (newValue) {
	if (Object.keys(this.album).length === 0) {
		return false
	}
	return true
},
imgSrc: {
	get: function () {
		if (this.photos.length > 0) {
			return this.photos[this.currentImg].image 
		}
		return ""
	},
	set: function () {
		if (this.photos.length > 0) {
			return this.photos[this.currentImg].image 
		}
		return ""
	},
},
