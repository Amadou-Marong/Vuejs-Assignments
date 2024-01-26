const app = Vue.createApp({
    data() {
        return {
            name: 'Amadou',
            age: 23,
            image: 'https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg',
        }    
    },
    methods: {
        agePlusFive() {
            return this.age + 5;
        },
        randomNumber() {
            return Math.random();
        }
    }

});
app.mount('#assignment')