showPhotos: {
	get: function () {
		if (this.photos.length === 0) {
			return "none"
		}
		return "block"
	},
	set: function (newValue) {
		if (this.photos.length === 0) {
			return "none"
		}
		return "block"
	}
},
showAlbums: {
	get: function () {
		if (this.isActive("albums") === false) {
			return "none"
		}
		return "block"
	},
	set: function (newValue) {
		if (this.isActive("albums") === false) {
			return "none"
		}
		return "block"
	}
},
showAlbum: {
	get: function () {
		if (Object.keys(this.album).length === 0){
			return "none"
		}
		return "block"
	},
	set: function (newValue) {
		if (Object.keys(this.album).length === 0) {
			return "none"
		}
		return "block"
	}
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
