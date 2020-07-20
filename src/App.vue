<template>
  <div id="app">
    <app-header/>
    <router-view></router-view>
    <app-footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import { dbMenuRef } from './firebase'
import { dbOrdersRef } from './firebase'

export default {
  name: 'App',
  components: {
    appHeader: Header, 
    appFooter: Footer

  },
   created (){
     this.$store.dispatch('setMenuRef', dbMenuRef)
     this.$store.dispatch('setOrdersRef', dbOrdersRef)
   }
}
</script>

<style>
body {
  margin: 0;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
button {
  border: none;
  color: white;
  padding: 10px;
  border-radius: 5px;
}
.red_btn {
    background-color: #f44336;
}
.green_btn {
      background-color: #4CAF50;
}
p {
  font-size: 1.2rem;
}

</style>
