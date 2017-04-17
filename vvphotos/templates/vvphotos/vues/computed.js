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