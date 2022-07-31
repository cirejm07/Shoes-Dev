<template>
  <div class="register">
    <div>
      <img src="@/assets/brand-logo.png" alt="">
    </div>
    <form @submit.prevent="registerHandler" class="mt-5">
  <p v-if="error" class="text-danger my-2">{{error}}</p>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label w-100 text-start">Email address</label>
    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label w-100 text-start">Password</label>
    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <button type="submit" class="btn btn-primary text-uppercase fw-bold">Sign up</button>
  </div>
 <div><span>Already have an have an account?</span><router-link class="login" to="/login">
    click here...</router-link></div>
</form>

    
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { auth } from '@/firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { useRouter } from 'vue-router';

  export default {
    name: "RegisterPage",
    setup() {
      const email = ref('')
      const password = ref('')
      const error = ref(null)
      const router = useRouter()
      const registerHandler = () => {
          createUserWithEmailAndPassword(auth, email.value, password.value)
          .then((data) => data.operationType === 'signIn' ? router.replace('/') : null)
          .catch((err) => {
            console.log(err.message)
            if(err.code === 'auth/weak-password'){
              error.value = 'Password should be at least 6 characters'
            } else if(err.code === 'auth/invalid-email'){
              error.value = 'Invalid Email'
            } else if(err.code === 'auth/email-already-in-use'){
              error.value = 'Email already registered'
            }
          })
      }

      return { email, password, registerHandler, error }
    }
  };
</script>

<style scoped>

form{
  width: 40%;
  margin: auto;
}
  
  img{
    width: 250px;
    height: auto;
  }

  .btn {
  width: 100%;
  background-color: #000;
  border: none;
  opacity: 1;
  transition: opacity 0.5s ease-out;
}

.btn:hover {
  opacity: 0.8;
}

.login {
  position: relative;
}

.login::before {
  content: "";
  width: 0;
  height: 10%;
  background-color: #000;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: width 0.5s ease;
}

.login:hover::before {
  width: 100%;
}

a {
  text-decoration: none;
  color: #000;
}

  input:focus {
    outline: none !important;
    background: none;
    box-shadow: none;
  }

  input[type="checkbox"]:not(:checked){
    background-color: #fff;
  }

  input[type="checkbox"]:checked{
   background-color: #000;
   outline: none;
   border: none;
  }

</style>
