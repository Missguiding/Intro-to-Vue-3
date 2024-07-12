// dit is onze eerste component 
//eerste argument is component naam, tweede is een object om het component te kunnen configureren - gekopieerd van de index(alle product info)
// ! belangrijk na template ! gebruik van comment html én begin en einde div de backtags ``
// ook de data, methodes en computed elements moeten mee komen met het product (stond voorheen in de main)
app.component('product-display', {
    props:{
        premium:{
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/ 
    `<div class="product-display"> 
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }} </p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
          class="color-circle" 
          :style="{ backgroundColor: variant.color }">
        </div>
        
        <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" v-on:click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>`,
  data() {
    return {
        //cart: 0, - dit mag weg omdat niet ieder product zijn eigen cart nodig heeft - het moet een globaal geheel worden gescheiden van één product
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
          { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
          { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
        ]
    }
},
methods: {
    addToCart() {
        this.cart += 1
    },
    updateVariant(index) {
        this.selectedVariant = index
    }
},
computed: {
    title() {
        return this.brand + ' ' + this.product
    },
    image() {
        return this.variants[this.selectedVariant].image
    },
    inStock() {
        return this.variants[this.selectedVariant].quantity
    },
    shipping(){
      if(this.premium){
        return 'free'
      }
      return 2.99
    }
}

}) 