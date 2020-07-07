<template>
  <div >
      <div class="background">
        <div class="background-overlay">
            <h2>Welcome to Pizza Planet</h2>
            <img src="https://source.unsplash.com/200x200/?pizza" alt="pizza">
            <h3>Feeling hungry</h3>
            <button class="order-btn" @click="goToMenu">Let's Order!</button>
        </div>
      </div>
        <section class="container">
            <h1>What we offer</h1>
            <div class="category-wrapper">
                <div class="card" v-for="x in 3" :key="x">
                    <div class="card-body"></div>
                    <div class="card-footer">
                        <div class="footer-text">
                            hello
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </div>
</template>

<script>
export default {
    name: 'Home',
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
}
.background-overlay img{
    max-width: 15%;
    display: block;
    justify-self: center;
}
.order-btn {
    background: #ff7799
}
.container {
    text-align: center;
}
.category-wrapper {
    display: flex;
    justify-content: center;
    margin: 1em;
    flex-direction: row;
    flex-wrap: wrap;
}

.card {
  position: relative;
  height: 200px;
  width: 200px;
  z-index: 0;
  overflow: hidden;
    background: #ff7799;
    margin: 1em;
}

  .card-footer {
    background: white;
    position: absolute;
    width: inherit;
    height: inherit;
    clip-path: inset(100% 0% 0%);
    -webkit-clip-path: inset(100% 0% 0%);
    transition: all 0.5s ease-in-out;
}
.footer-text {
    padding-top: 140px;
}
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.card:hover .card-footer {
      opacity: 1;
      clip-path: inset(60% 0% 0%);
      -webkit-clip-path: inset(60% 0% 0%);

}
@media screen and (min-width: 900px) {
    .container {
        max-width: 70%;
        margin: 0 auto;
    }

}
</style>