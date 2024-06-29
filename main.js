const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            // dit is de collection waar over zal geitireerd worden in de v-for
            details: ['50% cotton', '30% wool', '20% polyester'],
            // deze collectie bevat een id en een kleur per product
            variants:[
                {id:2234, color: 'green'},
                {id:2235, color: 'blue'}
            ],
            
            sizes: ['S,M,L,XL']
        }
    }
})
