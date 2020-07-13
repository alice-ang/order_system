import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import {store} from './store/store'
import Accounting from 'accounting-js'


Vue.config.productionTip = false
Vue.use(VueRouter);

Vue.filter('currency', val => Accounting.formatMoney(val, {symbol: "SEK", format:"%v %s" })
)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to){
    if(to.hash){
      return {selector: to.hash}
    } 
  }
})
router.beforeEach((to, from, next) => {
   next()
})

new Vue({
  router, store,
  render: h => h(App),
}).$mount('#app')
