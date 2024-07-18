app.component('review-form', {
    //we geven review-form naam mee en maken een template
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit"> <!--@submit = een modifier, prevents browser refresh en voegen we het onderaan toe als method-->
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <input id="name" v-model="name"> <!--we voegen v-model toe om een binding te maken met de data-->

      <label for="review">Review:</label>      
      <textarea id="review" v-model="review"></textarea> <!--we voegen v-model toe om een binding te maken met de data-->
  
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating"> 
      <!--.number = een modifier, typecasts the value as a number--> <!--we voegen v-model toe om een binding te maken met de data-->
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>    

      <!--code challenge-->
      <label for="recommended">Would you recommend this product</label>
      <select id="recommended" v-model="recommended">
      <option>YES!</option>
      <option>No!</option>
      </select>
  
      <input class="button" type="submit" value="Submit">  
  
    </form>`,
     //we geven alles van de template door aan de data
    data() {
      return {
        name: '',
        review: '',
        rating: null,
        recommended: '' // code challenge
        //na het maken van template en de data kunnen we v-model gebruiken als een 2-way binding tussen onze template en onze data        
      }
    },
    methods: {
      onSubmit() {
        if (this.name === '' || this.review === '' || this.rating === null || this.recommended ==='') {
          alert('Review is incomplete. Please fill out every field.')
          return
        }       
  
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          recommended: this.recommended
          
        }
        // nu we een productreview hebben we gecreeerd moeten we het doorzenden want het mag niet in het formulier leven maar op het product  
        this.$emit('review-submitted', productReview)
        // daarna resetten we alles
        this.name = ''
        this.review = ''
        this.rating = null       
        this.recommended = ''  
      }
    }
  })// daarna kunnen we het component importeren in de index.html
  // in product display kunnen we het component effectief gebruiken