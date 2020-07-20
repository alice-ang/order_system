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
                  <tr id="type">
                      <td >
                         <h2>{{getType(item.type)}}</h2> 
                      </td>
                  </tr>
                  <tr>
                      <td><strong>{{item.name}}</strong></td>
                  </tr>
                    <tr>
                      <td><small>{{item.description}}</small></td>
                  </tr>
                    <tr v-for="(option, index) in item.options" :key="option[index]">
                        <td v-if="option.size">{{option.size}} cm</td>
                        <td class="price" v-if="option.price">{{option.price | currency}}</td>
                        <td v-if="option.size || option.price">
                            <button @click="addToBasket(item, option)" class="green_btn">&#43;</button>
                        </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <!-- Basket --> 
      <div id="basket">
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
  <div class="fab" title="Cart" @click="showCart"><i class="fas fa-shopping-cart" v-if="this.basket.length <= 0"></i> <span v-else><strong>{{cartTotal()}}</strong></span></div>
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
        },
        getType(type){
            return type.toString().toUpperCase();
        },
        cartTotal(){
            return this.basket.length;
        },
        showCart(){
            const basket = document.getElementById('basket');
            console.log(basket.style.left);
            if(basket.style.left != '-1500px'){
                basket.style.left = '-1500px';
            } else {
                basket.style.left = '50%';
            }
        }
    },

}
</script>

<style scoped>
#type {
    text-decoration: underline;
    text-align: center;
}

.menu, #basket{
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
.menu-wrapper {
    position: relative;
}
#basket {
    padding: 1em;
    width: 80%;
    margin: 0 auto;
    max-height: 80vh;
    position: fixed;
    left: -1500px;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    text-align: center;
    box-shadow: 0 4px 6px 0 rgba(0,0,0,0.3);
    background-color: #ffffff;
    transition: .6s ease-in-out;
    overflow: scroll;
}

#basket table, .menu table {
    border-collapse: collapse;
    width: 100%;

}
#basket td, th {
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
    width: 90%;
    margin: 0 auto;
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
.fab {
   width: 70px;
   height: 70px;
   background-color: #ff7799;
   border-radius: 50%;
   box-shadow: 0 6px 10px 0 rgb(143, 143, 143);
   line-height: 70px;
   font-size: 25px;
   color: white;
   text-align: center;
   position: fixed;
   right: 30px;
   bottom: 30px;
  transition: all 0.1s ease-in-out;
}
.fab span {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

.fab:hover {
   box-shadow: 0 6px 14px 0 #666;
   transform: scale(1.05);
}
@media screen and (min-width: 900px) {
    .menu-wrapper {
        flex-direction: row;
        justify-content: center;
    }
    #basket {
        width: 50%;
        left: -1500px;
        top: 50%;
        transform: translate(-50%, -50%);
    }

}
</style>