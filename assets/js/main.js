const { createApp } = Vue

createApp ({
    data() {
        return {
            currentImage: 0,
            StopInterval: null,
            slides: [
                {
                    image: 'img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    }, {
                        image: 'img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    }, {
                        image: 'img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    }, {
                        image: 'img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    }, {
                        image: 'img/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    }
            ]
        }
    },
    methods: {
        next(){
            console.log(`next`)

            this.currentImage++

            if( this.currentImage > this.slides.length - 1) {
                this.currentImage = 0
            }
        },
        prev(){
            console.log(`prev`)

            this.currentImage--

            if( this.currentImage < 0) {
                this.currentImage = this.slides.length - 1
            }
        },
        autoScroll(){
            this.stopInterval = setInterval( ()=>{
                this.next()
            }, 2000 )
        },
        stopScroll(){
            clearInterval( this.stopInterval )
            this.stopInterval = null
        }
    }
}).mount(`#app`)