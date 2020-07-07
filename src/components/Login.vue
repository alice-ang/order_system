<template>
  <div class="login-wrapper">
      <form>
          <div>
              <label for="email">Email address</label>
              <input type="email" name="email" id="email" placeholder="Enter email" v-model="email">
          </div>
            <div>
              <label for="password">Password</label>
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

</style>