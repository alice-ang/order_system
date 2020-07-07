<template>
  <div class="menu-wrapper">
      <!-- Menu -->
      <div class="menu">
          <h3>Authentic Handmade Pizza</h3>
          <table v-for="item in getMenuItems" :key="item.name">
              <tbody>
                  <tr>
                      <td><strong>{{item.name}}</strong></td>
                  </tr>
                    <tr>
                      <td><small>{{item.description}}</small></td>
                  </tr>
                    <tr v-for="(option, index) in item.options" :key="option[index]">
                        <td>{{option.size}}"</td>
                        <td>{{option.price}}$</td>
                        <td>
                            <button @click="addToBasket(item, option)">&#43;</button>
                        </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <!-- Basket --> 
      <div class="basket">
          <h3>Basket</h3>
          <div v-if="basket.length > 0">
            <table>
                <tbody v-for="(item, index) in basket" :key="index">
                    <tr>
                        <td>{{item.name}}  {{item.size}}"</td>
                        <td>{{item.price * item.quantity}} $</td>
                        <td>
                            <button @click="decreaseQuantity(item)">&#8722;</button>
                            <span> {{item.quantity}} </span>
                            <button @click="increaseQuantity(item)">&#43;</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>Order total: </p>
          <button class="" @click="addNewOrder">Place Order</button>
          </div>
            <div v-else>
                <p>{{basketText}}</p>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'Menu',
    data(){
        return {
            basketText: "Your basket is empty",
            basket: [],
        }
    },
    computed: {
        ...mapGetters(['getMenuItems'])
    },
    methods: {
        async addToBasket(item, option){
            const pizzaExists = await this.basket.find(
                pizza => pizza.name === item.name && pizza.size === option.size
            )
            if(pizzaExists) {
                pizzaExists.quantity ++;
                return
            }
            this.basket.push({
                name: item.name,
                price: option.price,
                size: option.size,
                quantity: 1
            })
        },
        removeFromBasket(item){
            this.basket.splice(this.basket.indexOf(item), 1)
        },
        increaseQuantity(item){
            item.quantity ++;

        },
        decreaseQuantity(item){
            item.quantity --;
            if(item.quantity === 0){
                this.removeFromBasket(item);
            }
        },
        addNewOrder(){
            this.$store.commit('addOrder', this.basket)
            this.basket = []
            this.basketText = 'Thank you! Your order has been placed :) '
        }
    },

}
</script>

<style scoped>
.menu-wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    
}
.menu, .basket{
    padding: 1em;
    margin: 1em;
    background-color: #fff5e8

}

.basket {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.basket table {
    border-collapse: collapse;
}

.menu table {
    border-collapse: collapse;
    text-align: justify;
}
.menu table tr:nth-child(n+3) { 
  border-bottom: 2px solid grey;
}
.menu td {
    padding: .5em;
    margin: .5em;

}
.basket tr {
    margin: 1em 0;
    border-bottom: 2px solid grey;
}
@media screen and (min-width: 900px) {
    .menu-wrapper {
        flex-direction: row;
        justify-content: center;
    }
    .menu {
       width: 65vw;
    }
    .basket {
         width: 35vw;
    }
}
</style>