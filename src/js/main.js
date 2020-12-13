
var app = new Vue({
    el: '#app',
    data: {
        // Slide gallery img
        indexPhoto: 0,
        gallery: [
            './img/gallery-01.jpg',
            './img/gallery-02.jpg',
            './img/gallery-03.jpg',
            './img/gallery-04.jpg',
            './img/gallery-05.jpg',
            './img/gallery-06.jpg',
        ],
    },
    methods: {
        nextPhoto() {
            this.indexPhoto++
            if (this.indexPhoto > this.gallery.length - 1) {
                this.indexPhoto = 0
            }
        },
        prevPhoto() {
            this.indexPhoto--
            if (this.indexPhoto < 0) {
                this.indexPhoto = this.gallery.length - 1
            }
        },
    },

})