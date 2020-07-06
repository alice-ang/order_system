import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'


Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {path: '/', name:'homeLink', component: Home},
  {path: '/menu', name:'menuLink', component: Menu},
  {path: '/admin', component: Admin},
  {path: '*', redirect: '/'}
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
