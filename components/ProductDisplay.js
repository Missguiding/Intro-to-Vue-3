app.component('product-display', {
  props: {
    premium: {
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

        <p>Shipping: {{ shipping }}</p>
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
        
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="addToCart">
          Add to Cart
        </button>
      </div>
    </div>
    <!--Hier gaan we het component gaan invoegen en gebruiken-->
    <review-list v-if="reviews.length":reviews="reviews"></review-list><!--we voegen de reviews prop toe (:reviews) en geven reviews door (zie data reviews[])--> 
<!--v-if : toon enkel de reviews als er reviews zijn (maw als de array leeg is tonen we ze niet--> 
    <!--Hier gaan we het component gaan invoegen en gebruiken-->
    <review-form @review-submitted="addReviews"></review-form><!--De lissener toevoegen aan reviewform met @--> 
    <!--als dat getriggerd word spreken we de methode 'addReview' aan-->

  </div>`,
  data() {
    return {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
          { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
          { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
        ],
        reviews:[] // de methode addReviews zal een lijst van review zijn dus in de data maken we een array
    }
  },
  methods: {
      addToCart() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
      },
      updateVariant(index) {
          this.selectedVariant = index
      },
      //hier voegen we de nieuwe methode toe, wat de review van de event-payload mee krijgt
      addReviews(review){
        this.reviews.push(review) //pushed het in de reviews array- data
        // nu kunnen we reviews toevoegen 
        // we moeten ze ook nog tonen en daarom maken we een nieuwe component
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
      shipping() {
        if (this.premium) {
          return 'Free'
        }
        return 2.99
      }
  }
})