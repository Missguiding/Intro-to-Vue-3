app.component('review-list',{
    props:{
    //kan reviews ontvangen van het type array en het is verplicht
    reviews: {
        type: Array,
        required: true

    }
},
  template:
  /*html*/
  `
  <div class="review-container">
  <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} gave this {{ review.rating }} stars
        <br/>
        "{{ review.review }}"
        <br/>
        <!--code challenge-->
        Recommended: {{review.recommended}}
       
      </li>
    </ul>
  </div>
`
}) 

//we voegen een v-for loop toe, zodat we iedere review kunnen uitprinten van onze array-->
//including de index zodat we de key-index kunnen binden-->
    //dan gebruiken we expressions zodat we de de zijn kunnen afdrukken-->
    // <br> we maken een break en daaronder geven we de tekst van de review mee-->

//dit component steken we ook in de index.html