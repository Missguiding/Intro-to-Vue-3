const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery', // toegevoegd voor de oefening
          // image: './assets/images/socks_blue.jpg', // deze verwijderen we en we maken een nieuwe property, selectedVariant
            selectedVariant: 0, // 0 omdat we het updaten met de index waar we over hoveren
           // inStock: false, inStock mag ook weg omdat we dat samen met de image in de computed propery steken
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ],
            onSale: true,
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) { // deze zullen we wijzigen naar updateVariant met als parameter 'index'
            this.selectedVariant = index // selectedVariant zetten we gelijk aan de index
        }
    },
    computed:{
        title(){
            return this.brand + " " + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image // op zoek naar de variant;
           //binne de array[]  0=groen, 1=blauw en de .image is om de correcte afbeelding weer te geven
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity // op zoek naar de variant;
           //binnen de array[]  0=groen, 1=blauw en de .image is om de correcte afbeelding weer te geven
        },
        // Code Challenge L8
        sale(){
            if(this.onSale){
                 return this.brand + ' ' + this.product + ' is on sale.'
            }            
        }
    }
})
