<template>
  <header>
      <nav>
        <div class="header_logo">
            <h1 ><router-link :to="{name: 'homeLink'}">Pizza Planet</router-link></h1>
        </div>
            <span id="icon" @click="navigation">&#x2630;</span>
          <ul>
              <li><router-link :to="{name: 'homeLink'}">Home</router-link></li>
                <li><router-link :to="{name: 'menuLink'}">Menu </router-link></li>
          </ul>
      </nav>
      <div>
          
      </div>
  </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        navigation: function(){
            const menu = document.querySelector('ul');
            
            if(menu.style.display === 'none'){
             menu.style.display = 'flex';
            } else {
                menu.style.display = 'none';
            }
            
        }
    }
}
</script>

<style scoped>
nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #ff7799;
    color: white;
}
h1 a {
    text-decoration: none;
    color: white;
    line-height: 50px;
}

ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
}
ul li {
    list-style: none;
    padding: 1em;
}
ul li a {
    text-decoration: none;
    color: white;
    font-weight: bold;
}
ul li a:hover {
    border-bottom: 1px solid white;
}
#icon {
    font-size: 2em;
    display: block;
    color: white;
        margin: .5em;
}
#icon:hover {
    cursor: pointer;
}
@media screen and (min-width: 900px) {
    #icon {
        display: none;
    }
    ul {
        width: 30%;
        height: fit-content;
        flex-direction: row;
        justify-content: center;
        display: flex;
    }
}
</style>