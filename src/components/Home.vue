<template>
  <div class="background">
      <div class="background-overlay">
          <h2>Welcome to Pizza Planet</h2>
          <img src="https://source.unsplash.com/200x200/?pizza" alt="pizza">
          <h3>Feeling hungry</h3>
          <button class="order-btn">Let's Order!</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Home'
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
</style>