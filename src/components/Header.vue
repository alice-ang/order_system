<template>
  <header>
      <nav>
        <div class="header_logo">
            <h1 href="/">Company Name</h1>
        </div>
          <ul>
              <li><router-link :to="{name: 'homeLink'}">Home</router-link></li>
                <li><router-link :to="{name: 'menuLink'}">Menu </router-link></li>

          </ul>
      </nav>
  </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-around;
}
.header_logo img{
    border-radius: 50%;
}

ul {
    display: flex;
    flex-direction: row;
    justify-content: center
}
ul li {
    list-style: none;
    padding: 1em;
}
ul li a {
    text-decoration: none;
    color: black;
}
@media screen and (min-width: 900px) {

}
</style>