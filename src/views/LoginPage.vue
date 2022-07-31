<template>

  <div class="log-in">
    <div class="d-flex justify-center">
      <img src="../assets/brand-logo.png" alt="">
    </div>
  <form @submit.prevent="loginHandler" class="mt-2">
  <p v-if="error === 'User disabled'" class="text-danger my-2">{{error}}</p>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label w-100 text-start">Email address</label>
    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <p v-if="error === 'User not found' || error === 'Invalid Email'" class="text-danger text-start mt-1">{{ error }}</p>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label w-100 text-start">Password</label>
    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
    <p v-if="error === 'Invalid Password'" class="text-danger text-start mt-1">{{ error }}</p>
  </div>
  <div class="form-check text-start">
    <span v-if="!isCheck" class="text-danger text-start"> Please check the box in order to sign in. </span>
    <span v-else class="text-start"> I agree to terms and condition of LuzViMinda.</span>
    <input @click="checking" v-model="isCheck" id="checkBtn" type="checkbox" class="form-check-input">
  </div>
    <p  class="form-check-label mb-3 text-start" for="exampleCheck1">By checking the box, you agree to LuzViMinda's  Privacy Policy and Terms of Use.</p>
  <div class="mb-3">
    <button :disabled="!isCheck" type="submit" class="btn btn-primary text-uppercase fw-bold">Sign in</button>
  </div>
  <div>
    <router-link to="/register" class="register">Don't have an account?</router-link>
  </div>
</form>

  </div>
</template>

<script>

import { ref } from '@vue/reactivity'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from '@firebase/auth'





export default {
  name: 'LoginPage',
  setup() {
      const email = ref('')
      const password = ref('')
      const error = ref(null)
      const isCheck = ref(true)
      const checkValue = ref(false)
      const checking = (e) => {
          if(e.target.checked){
            checkValue.value = true
           console.log(checkValue)
          }
      }

      // const router = useRouter()
      const loginHandler = () => {
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
          if(data.user.uid  === '7W29HGeCdfPpqASfWeHlZkOY9t63'){
            console.log(data)
            window.location.assign('/admin')
          } else {
            window.location.assign('/')
          }
          if (checkValue.value == false){
             error.value = 'Please check the box'
          } 

          } )
        .catch((err) => {
          if(err.code === 'auth/user-not-found'){
            error.value = 'User not found'
          } else if (err.code === 'auth/invalid-email'){
            error.value = 'Invalid Email'
          }
          else if (err.code === 'auth/wrong-password'){
            error.value = 'Invalid Password'
          } else if (err.code === 'auth/user-disabled'){
            error.value = 'User disabled'
          } else if (isCheck.value === false){
            email.value = ''
            password.value = ''
            return err
          }
        })

        
      }

      

       return { checking, checkValue , email, password, isCheck, loginHandler , error }
  },
  methods: {
     
  }
}
</script>

<style scoped>
* {
  font-size: 14px !important;
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

.register {
  position: relative;
}

.register::before {
  content: "";
  width: 0;
  height: 10%;
  background-color: #000;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: width 0.5s ease;
}

.register:hover::before {
  width: 100%;
}

a {
  text-decoration: none;
  color: #000;
}

form{
  width: 40%;
  margin: auto;
}
  
  img{
    width: 250px;
    height: auto;
  }

  input:focus {
    outline: none !important;
    background: none;
    box-shadow: none;
  }

  .form-check-label{
    font-size: 12px;
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