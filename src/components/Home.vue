<template>
  <div >
      <div class="background">
        <div class="background-overlay">
            <h2>Welcome to Pizza Planet</h2>
            <h3>Feeling hungry?</h3>
            <button class="order-btn" @click="goToMenu">Let's Order!</button>
        </div>
      </div>
        <section class="container">
            <h1>What we offer</h1>
            <div class="category-wrapper">
                <div class="card" v-for="category in categories" :key="category.name">
                   <router-link :to="{name: 'menuLink'}">
                    <div class="card-body">
                        <img v-bind:src="`https://source.unsplash.com/500x500/?${category.name}`" alt="">
                        <h1>{{category.name}}</h1>
                    </div>
                        </router-link>

                </div>
            </div>
        </section>
  </div>
</template>

<script>
export default {
    name: 'Home',
    data(){
        return {
            categories: [
                {
                    name: 'Kebab'
                }, 
                {
                    name: 'Pizza'
                },
                {
                    name: 'Sallad'
                }
            ],
        }
    },
    methods: {
        goToMenu(){
            this.$router.push({name: 'menuLink'})
        }
    },
}
</script>

<style scoped>
.background {
    background: url('https://source.unsplash.com/1920x1080/?pizza') center;
    background-size: cover;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 2em 1em;
}
.background-overlay {
    display: flex;
    flex-direction: column;
    background: #f1e6da;
    padding: 1em;
    opacity: 0.8;
    margin: 0 auto;
    border-radius: 5px;
}

.order-btn {
    font-weight: bold;
    background: #ff7799
}
.container {
    text-align: center;
}
.category-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
}

.card {
    margin-top: 1em;
    position: relative;
    height: 300px;
    width: 300px;
    z-index: 0;
    overflow: hidden;
}
.card:hover {
    cursor: pointer;
}

.card h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

@media screen and (min-width: 900px) {
    .container {
        max-width: 70%;
        margin: 0 auto;
    }
    .card {
    margin: 1em;
    }
    .category-wrapper {
    margin: 1em;
    }
}
</style>