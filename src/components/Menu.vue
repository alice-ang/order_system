<template>
    <div>
        <div class="menu-image-wrapper">
            <img src="https://source.unsplash.com/1920x1080/?pizza_restaurant" alt="">
            <h1>Menu</h1>
        </div>
          <div class="menu-wrapper">
      <!-- Menu -->
      <div class="menu">
            <table v-for="item in getMenuItems" :key="item.name">
              <tbody>
                  <tr>
                      <td><strong>{{item.name}}</strong></td>
                  </tr>
                    <tr>
                      <td><small>{{item.description}}</small></td>
                  </tr>
                    <tr v-for="(option, index) in item.options" :key="option[index]">
                        <td>{{option.size}} cm</td>
                        <td class="price">{{option.price | currency}}</td>
                        <td>
                            <button @click="addToBasket(item, option)" class="green_btn">&#43;</button>
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
                        <td>{{item.name}}  {{item.size}} cm</td>
                        <td>{{item.price * item.quantity | currency}} </td>
                        <td>
                            <button @click="decreaseQuantity(item)" class="red_btn">&#8722;</button>
                            <span> {{item.quantity}} </span>
                            <button @click="increaseQuantity(item)" class="green_btn">&#43;</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="additional-wrapper">
                <label for="additional">Additional info</label><br>
                <textarea name="additional" id="additional" v-model="additional"></textarea>
            </div>
            <div class="order">
                <p>Order total: <strong>{{total | currency}}</strong> </p>
                <button @click="addNewOrder" class="green_btn">Place Order</button>
            </div>
          </div>
            <div v-else>
            <p>{{basketText}}</p>
        </div>
      </div>
  </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import {store} from '../store/store'
export default {
    name: 'Menu',
    data(){
        return {
            basketText: "Your basket is empty",
            additional: '',
            basket: [],
        }
    },
    computed: {
        ...mapGetters(['getMenuItems']),
        total(){
            let totalCost = 0;
            this.basket.map(item => {
                totalCost += item.quantity * item.price
            })
            return totalCost
        }
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
            const order = {
                items: {...this.basket},
                additional: this.additional,
                createdAt: new Date(),
            }
            store.dispatch('addNewOrder', order);
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
    background-color: #fff5e8;
    font-size: 1.2rem;

}
.additional-wrapper {
    margin: 1em 0;
}
.additional-wrapper textarea {
    width: 50%;
    height: 100px;
}

.additional-wrapper, .order {
    text-align: center;
}

.basket {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
}

.basket table, .menu table {
    border-collapse: collapse;
    width: 100%;

}
.basket td, th {
  border: 1px solid grey;
  text-align: left;
  padding: 8px;
}

.menu-image-wrapper {
  position: relative;
  text-align: center;
  color: #ffffff;

}
.menu-image-wrapper h1 {
    font-size: 5em;
    transform: translate(-50%, -50%);
      margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
}
.menu-image-wrapper img {
    width: 100%;
    max-height: 35vh;
    object-fit: cover;
}

.menu {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}

.menu table tr:nth-child(n+3) { 
  border-bottom: 2px dotted grey;
}
.menu td {
    padding: .5em;
    margin: .5em;

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