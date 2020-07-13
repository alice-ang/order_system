<template>
<div class="container">
      <div class="current-user-wrapper "  v-if="currentUser">
          <span>Logged in as: <strong>{{currentUser.email}} </strong> </span>
          <button  type="button" @click.prevent="signOut" class="red_btn">Sign out</button>
      </div>
    <div class="admin-wrapper">
      <NewItem id="newItem" class="card" v-if="currentUser" />
    <Login id="logIn" class="card" v-if="!currentUser"/>

      <div class="menu-wrapper card" v-if="currentUser" >
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
                      <td><button type="button" @click="removeMenuItem(item.id)" class="red_btn">&times;</button></td>
                  </tr>
              </tbody>
          </table>
      </div>
      <div class="orders-wrapper card" v-if="currentUser" >
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
              <tbody v-for="(order, index) in getOrders" :key="order.id">
                  <tr class="order-number">
                      <th colspan="5">
                          <strong>Order #{{index +1}} </strong>
                          <button type="button" @click="removeOrder(order.id)" class="red_btn">&times;</button>
                      </th>
                  </tr>
                  <tr v-for="item in order.items" :key="item.id">
                      <td>{{item.name}}</td>
                      <td>{{item.size}}</td>
                      <td>{{item.quantity}}</td>
                      <td>{{item.price| currency}}</td>
                  </tr>
                <tr>
                    <th colspan="5">Additional information:</th>
                </tr>
                <tr class="additional">
                    <td colspan="5">{{order.additional}}</td>
                </tr>
              </tbody>
          </table>
      </div>
  </div>
</div>
</template>

<script>
import Login from './Login'
import NewItem from './NewItem'
import {store} from '../store/store'
import { mapGetters } from "vuex";

export default {
    name: 'Admin',
    components: {
        Login, NewItem
    },
    data(){
        return {
            name: 'Chris'
        }
    },
    computed:{
        ...mapGetters(['getMenuItems', 'numberOfOrders', 'currentUser', 'getOrders'])
    },
    methods: {
        async signOut(){
            store.dispatch('signOut')
        },
        removeMenuItem(id) {
            store.dispatch('removeMenuItem', id)
        },
        removeOrder(id) {
            store.dispatch('removeOrder', id)
        }
    },

}
</script>

<style scoped>

.current-user-wrapper {
    text-align: center;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.orders-wrapper, .menu-wrapper {
    width: 100%;
}
.admin-wrapper {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    margin: 0;
    min-height: 100vh;
    padding-top: 1em;
    flex-wrap: wrap;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 1em;
  margin: 1em;
  height: fit-content;
    background-color: #ffffff;
}

table {
    width: 100%;
    border-collapse: collapse;
}
td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 1em;
}

#newItem {
    margin: 0;
    width: 100%;
}
.order-number {
    background: #dddd;
}

@media screen and (min-width: 900px) {
    .container {
        max-width: 80%;
        margin: 0 auto;
    }
    #logIn, #newItem {
        width: 50%;
        margin: 1em auto;
    }
}
</style>