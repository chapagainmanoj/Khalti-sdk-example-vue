require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Product from './components/Product.vue'
import Order from './components/Order.vue'
import Complete from './components/Complete.vue'
import Incomplete from './components/Incomplete.vue'

// Register components and services
Vue.use(VueRouter);

import axios from 'axios'
let data = {
  "token": "jHAdLDiQopAqzX3RwMMqDF",
  "amount": 1500
};
axios.post(`${window.endpoint}/charge`, data)
  .then((result) => {
        // var uuid = res.data.uuid;
        console.log("Charge Works");
        console.log(result);
        // this.$router.push({ path: `order-complete/${uuid}` });
    })
    .catch((err)=>
    console.log("Erro")
  );


// Register routes
const routes = [
  { name: 'home', path: '/', component: Product },
  { name: 'order', path: '/order', component: Order },
  { name: 'order-complete', path: '/order-complete/:id', component: Complete },
  { name: 'order-incomplete', path: '/order-broken', component: Incomplete }
];

const router = new VueRouter({
  routes
});

// instantiate everything to DOM
new Vue({
	router,
	el: '#app',
	data(){
		return {
			order_details: {}
		}
	},
	render: h => h(App)
});