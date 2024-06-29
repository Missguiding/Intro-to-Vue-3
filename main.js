const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods:{
        addToCart(){
            this.cart +=1 // refereert naar cart in data hierboven
        },
        updateImage(variantImage){ // parameter variant.image - zie index parameter variant.image
            this.image = variantImage // in de methode zeggen we deze imaga is gelijk aan de doorgegeven (parameter) image
        }
    }
})
