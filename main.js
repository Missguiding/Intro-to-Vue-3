const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            inventory: 0,
            //Code challenge L4
            onSale: false
        }
    }
})
