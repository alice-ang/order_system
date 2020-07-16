import Home from './components/Home'
const Menu = () => import('./components/Menu')
//import Menu from './components/Menu'
const Admin = () => import('./components/Admin')
//import Admin from './components/Admin'

export const routes = [
    {path: '/', name:'homeLink', component: Home},
    {path: '/menu', name:'menuLink', component: Menu},
    {path: '/admin', component: Admin,
    beforeEnter: (to, from, next) => {
      alert('This is for authorized users only! Please login to continue.');
      next()
    } },
    {path: '*', redirect: '/'}
  ]