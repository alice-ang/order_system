import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseAuth } from "../firebase";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        menuItems: {
            1: {
                name: 'Hawaii',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, quas incidunt. Dolores tempore ipsa voluptas, praesentium provident magnam doloribus aliquid maiores id est velit eligendi earum!',
                options: 
                [
                    {
                        size: '9',
                        price: '2'
                    },
                    {
                        size: '12',
                        price: '5'
                    }
                ]
            },
            2: {
                name: 'Pepperoni',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, quas incidunt. Dolores tempore ipsa voluptas, praesentium provident magnam doloribus aliquid maiores id est velit eligendi earum!',
                options: 
                [
                    {
                        size: '9',
                        price: '2'
                    }
                ]
            }                
        },
        orders: [],
        currentUser: null
    },
    getters: {
        getMenuItems: state =>  state.menuItems,
        numberOfOrders: state => state.orders.length,
        currentUser: state => state.currentUser
    },
    mutations: {
        addOrder: (state, orders) => state.orders.push(orders),
        userStatus: (state, user) => {
            user === null
            ? state.currentUser = null
            : state.currentUser = user
        }
    },
    actions: {
        signIn: async({commit}, user) => {
            try {
                const userData = await firebaseAuth.signInWithEmailAndPassword(user.email, user.password);
                commit('userStatus', userData.user)
            }   catch(error ){
                const errorCode = error.code;
                const errorMessage = error.message;
                if(errorCode === 'auth/wrong-password') {
                    alert('Wrong password')
                } else {
                    alert(errorMessage)
                }

            }
        },
        signOut: async({commit}) => {
            try {
                await firebaseAuth.signOut()
            } catch (error) {
                alert(`error signing out, ${error}`)                
            }
            commit('userStatus', null)
        }
    } 

})