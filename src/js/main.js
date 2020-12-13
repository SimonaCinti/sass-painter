
var app = new Vue({
    el: '#app',
    data: {
        // Slide gallery img
        indexPhoto: 0,
        gallery: [
            'gallery-01.jpg',
            'gallery-02.jpg',
            'gallery-03.jpg',
            'gallery-04.jpg',
            'gallery-05.jpg',
            'gallery-06.jpg',
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