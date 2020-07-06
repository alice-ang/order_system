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
import { firebaseAuth } from "../firebase";
export default {
    name: 'Login',
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async signIn() {
            try {
                await firebaseAuth.signInWithEmailAndPassword(this.email, this.password);
            }   catch(error ){
                const errorCode = error.code;
                const errorMessage = error.message;
                if(errorCode === 'auth/wrong-password') {
                    alert('Wrong password')
                } else {
                    alert(errorMessage)
                }

            }
        }
    },
}
</script>

<style scoped>

</style>