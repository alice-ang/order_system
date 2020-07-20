import {firestoreAction} from 'vuexfire'
import {dbMenuRef} from '../../firebase'

const state = {
    menuItems: [],
}

const getters = {
     getMenuItems:  state =>  state.menuItems
}
const mutations = {

}
const actions = {
    setMenuRef: firestoreAction(context => {
        return context.bindFirestoreRef('menuItems', dbMenuRef.orderBy("type"))
    }),
    addMenuItem: async(context, menuItem) => {
        try {
            await dbMenuRef.add(menuItem)
        } catch (error) {
            alert(`Error creating new menu item, ${error}`)
        }
    },
    removeMenuItem: async(context, id) =>{
        try {
           const item = await dbMenuRef.doc(id)
           
           let deleted = confirm(`Are you sure you want to delete this item?`);
           if (deleted == true) {
            item.delete() 
          }
        } catch (error) {
            alert(`Error removing menu item, ${error}`)
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}