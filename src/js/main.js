
var app = new Vue({
    el: '#app',
    data: {
        // Slide gallery img
        indexPhoto: 0,
        gallery: [
            'gallery-01',
            'gallery-02',
            'gallery-03',
            'gallery-04',
            'gallery-05',
            'gallery-06',
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