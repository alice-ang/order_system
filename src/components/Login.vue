<template>
  <div class="login-wrapper">
        <h1>Login</h1>
        <p>Please login to view admin page.</p>
        <hr>
      <form>
          <div>
              <label for="email">Email address</label> <br>
              <input type="email" name="email" id="email" placeholder="Enter email" v-model="email">
          </div>
            <div>
              <label for="password">Password</label> <br>
              <input type="password" name="password" id="password" placeholder="Enter password" v-model="password">
          </div>
          <button type="button" @click.prevent="signIn">Sign in</button>
      </form>
  </div>
</template>

<script>
import { store } from "../store/store";
export default {
    name: 'Login',
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signIn() {
            const user = {
                email: this.email,
                password: this.password
            }
            store.dispatch('signIn', user)
        }
    },
}
</script>

<style scoped>
.login-wrapper form{
    margin-top: 2em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    
}
form div {
    width: 100%;
}
/* Full-width input fields */
input[type=email], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  box-sizing: border-box;
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