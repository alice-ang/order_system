<template>
    <form >
        <h2>Add new Item: </h2>
        <div class="form-group">
            <label for="type">Type</label>
            <select name="types" id="types" v-model="newItem.type" v-on:change="newItem.type = $event.target.value">
                <option value="pizza" selected="selected">Pizza</option>
                <option value="kebab">Kebab</option>
                <option value="sallad">Sallad</option>
            </select>
        </div>
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
            <label for="size1">Size (cm)</label>
            <input type="text" id="size1" v-model="newItem.options[0].size">
        </div>
        <div class="form-group">
            <label for="price1">Price</label>
            <input type="text" id="price1" v-model="newItem.options[0].price">
        </div>
        <p>Option: 2</p>
        <div class="form-group">
            <label for="size2">Size (cm)</label>
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
import {store} from '../store/store'
export default {
    name: 'NewItem',
    data(){
        return {
            newItem: {
                    type: 'Pizza',          
                    name: 'Eg. Hawaii',
                    description: 'Eg. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, quas incidunt. Dolores tempore ipsa voluptas, praesentium provident magnam doloribus aliquid maiores id est velit eligendi earum!',
                    options: 
                    [
                        {
                            size: '40',
                            price: '90'
                        },
                                                {
                            size: '90',
                            price: '110'
                        }
                    ]
            }
        }
    },
    methods: {
        add(){
            console.log(this.newItem);
            //dbMenuRef.add(this.newItem);
            store.dispatch('addMenuItem', this.newItem)
        }
    },
}
</script>

<style scoped>
form {
    display: flex;
    padding: 1em;
    justify-content: flex-start;
    flex-direction: column;
}
.form-group {
    margin: 1em 0;
    
}
label {
    display: block;
    font-weight: bolder;
}
h2{
    text-align: center;
}
input[type=text],  textarea, select {
    box-sizing: border-box;
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}
button {
    background-color: #4CAF50;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

</style>