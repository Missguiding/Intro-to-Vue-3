const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg', // target één van de images(toegevoegd aan de assets folder) door het path mee te geven

            //Code Challenge L3            
            url: 'https://www.prosafco.be/'           
        }
    }
})