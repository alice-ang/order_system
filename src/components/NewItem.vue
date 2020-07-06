<template>
    <form >
        <h3>Add new Pizza: </h3>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="newItem.name">
        </div>
        <div class="form-group">
            <label for="description">Description</label>
            <textarea type="text" id="description" v-model="newItem.description" rows="5"/>
        </div>
        <p>Option: 1</p>
        <div class="form-group">
            <label for="size1">Size (")</label>
            <input type="text" id="size1" v-model="newItem.options[0].size">
        </div>
        <div class="form-group">
            <label for="price1">Price</label>
            <input type="text" id="price1" v-model="newItem.options[0].price">
        </div>
        <p>Option: 2</p>
        <div class="form-group">
            <label for="size2">Size (")</label>
            <input type="text" id="size2" v-model="newItem.options[1].size">
        </div>
        <div class="form-group">
            <label for="price2">Price</label>
            <input type="text" id="price2" v-model="newItem.options[1].price">
        </div>
        <button type="button" @click="add">Add</button>
    </form>
</template>

<script>
import {dbMenuRef} from '../firebase'
export default {
    name: 'NewItem',
    data(){
        return {
            newItem: {
                    name: 'Eg. Hawaii',
                    description: 'Eg. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, quas incidunt. Dolores tempore ipsa voluptas, praesentium provident magnam doloribus aliquid maiores id est velit eligendi earum!',
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
            }
        }
    },
    methods: {
        add(){
            dbMenuRef.add(this.newItem);
        }
    },
}
</script>

<style scoped>
form {
    display: flex;
    width: 50%;
    margin: 0 auto;
    justify-content: flex-start;
    flex-direction: column;
    border: 1px solid black;
}
.form-group {
    margin: 1em 0;
    
}
label {
    display: block;
}
input, textarea {
    padding: 5px;
    box-sizing: border-box;
}

</style>