<template>
  <div class="admin-wrapper">
      <div class="current-user-wrapper"  v-if="currentUser">
          <span>Logged in as: {{currentUser.email}} </span>
          <button  type="button" @click.prevent="signOut">Sign out</button>
      </div>
      <NewItem/>
      <div class="menu-wrapper">
          <h3>Menu</h3>
          <table>
              <thead>
                  <tr>
                      <th>Item</th>
                        <th>Remove from menu</th>  
                    </tr>
              </thead>
              <tbody v-for="item in getMenuItems" :key="item.name">
                  <tr>
                      <td>{{item.name}}</td>
                      <td><button type="button">&times;</button></td>
                  </tr>
              </tbody>
          </table>
      </div>
      <div class="orders-wrapper">
          <h3>Current Orders ({{numberOfOrders}})</h3>
          <table>
              <thead>
                  <tr>
                      <th>Item</th>
                      <th>Size</th>
                      <th>Quantity</th>
                      <th>Price</th>
                  </tr>
              </thead>
              <tbody>
                  <tr class="order-number">
                      <th colspan="4">
                          <strong>Order Number: 4</strong>
                          <button type="button">&times;</button>
                      </th>
                  </tr>
                  <tr>
                      <td>Name</td>
                      <td>Size</td>
                      <td>Quantity</td>
                      <td>Price</td>
                  </tr>
              </tbody>
          </table>
      </div>
      <Login/>
  </div>
</template>

<script>
import NewItem from './NewItem'
import Login from './Login'
import {store} from '../store/store'
import { mapGetters } from "vuex";

export default {
    name: 'Admin',
    components: {
        NewItem, Login
    },
    data(){
        return {
            name: 'Chris'
        }
    },
    computed:{
        ...mapGetters(['getMenuItems', 'numberOfOrders', 'currentUser'])
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
        alert(`Hi, ${vm.name}`)
        })
    },
    methods: {
        async signOut(){
            store.dispatch('signOut')
    },
    }
}
</script>

<style scoped>
.admin-wrapper {
    margin: 1em;
}

.current-user-wrapper ,.admin-wrapper, .menu-wrapper {
    margin: 10px 0;
    padding: 1em;
    border: 1px solid green;
}
.order-number {
    background: #dddd;
}
</style>