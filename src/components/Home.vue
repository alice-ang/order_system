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
            <div id="about">
              <h1>About Pizza Planet</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque praesentium vel nobis, necessitatibus quibusdam odio corrupti explicabo facilis ex eaque. Repellat culpa delectus qui accusantium ratione repellendus repudiandae minus at! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam reiciendis eveniet dignissimos autem voluptate aspernatur, incidunt animi, distinctio molestiae culpa. Temporibus sit voluptates commodi quia ad. Ratione, numquam veniam?</p>
          </div>
            <h1>What we offer <i class="fas fa-hand-point-down"></i></h1>
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
.container, #about h1 {
    text-align: center;
}
#about {
    padding: 1em;
}
#about p{
     text-align: justify;

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
    height: 250px;
    width: 250px;
    z-index: 0;
    overflow: hidden;
        box-shadow: 0 4px 6px 0 rgba(0,0,0,0.3);

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