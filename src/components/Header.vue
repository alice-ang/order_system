<template>
  <header>
      <div class="header_logo">
          <img src="https://source.unsplash.com/200x200/?logo" alt="Companym logo">
          <h1 href="/">Company Name</h1>
      </div>
      <nav>
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
.header_logo {

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