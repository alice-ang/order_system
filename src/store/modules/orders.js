import {firestoreAction} from 'vuexfire'
import {dbOrdersRef} from '../../firebase'

const state = {
    orders: [],
}

const getters = {
     numberOfOrders: state => state.orders.length,
     getOrders: state => state.orders
}
const mutations = {
    // addOrder: (state, orders) => state.orders.push(orders)
}
const actions = {
    setOrdersRef: firestoreAction(context => {
        return context.bindFirestoreRef('orders', dbOrdersRef.orderBy('createdAt'))
      }),
      addNewOrder: async (context, order) => {
        try {
            dbOrdersRef.add(order)
        } catch (error) {
            alert('Sorry there was a problem placing your order. Try again!')
        }
    },
    removeOrder: async(context, id) => {
        try {
           const order = await dbOrdersRef.doc(id); 
           let deleted = confirm(`Are you sure you want to delete this order?`);
           if (deleted == true) {
            order.delete()
          }
        } catch (error) {
            alert(`Sorry, there was a problem removing the order. ${error}`)
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}