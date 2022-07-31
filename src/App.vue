<template>
  <WelcomeNav :title="getId === '7W29HGeCdfPpqASfWeHlZkOY9t63' ? 'Admin' : 'Hi'" :user="userName" :signoutHandler="signoutHandler" />
  <div v-if="isShow && getId === '7W29HGeCdfPpqASfWeHlZkOY9t63'">
   <AdminNav :user="userName" :signoutHandler="signoutHandler" />
  </div>
  <div v-else-if="getId !== '7W29HGeCdfPpqASfWeHlZkOY9t63'">
    <CustomerNavVue :user="userName" :signoutHandler="signoutHandler" />
  </div>
  <router-view/>
  <FooterView />
</template>

<script>

import {  useRoute, useRouter } from 'vue-router'
import { auth } from '../src/firebase'
import { onAuthStateChanged, signOut } from '@firebase/auth'
import { onBeforeMount, ref } from 'vue'
import AdminNav from './components/AdminNav.vue'
import CustomerNavVue from './components/CustomerNav.vue'
import WelcomeNav from './components/WelcomeNav.vue'
import FooterView from './components/FooterView.vue'




export default {
  name: 'App',
  components: { AdminNav, CustomerNavVue, WelcomeNav, FooterView },
  setup(){

    const userName = ref('')
    const isShow = ref(false)
    const router = useRouter()
    const getId = ref(null)
    const route = useRoute()
    

   onBeforeMount(() => {
    onAuthStateChanged(auth, (user) => {
      if(!user){
        console.log('there is no user')
        router.replace('/login')
      } else if(user && route.path == '/login' ||  user && route.path == '/register'){
        router.replace('/')
        isShow.value = true
      } else if (user && getId.value === '7W29HGeCdfPpqASfWeHlZkOY9t63'){
         isShow.value = true
         router.replace('/admin')
         userName.value = user.email.split('@')[0]
      } else if ( 
        route.path == '/admin' && user.uid != '7W29HGeCdfPpqASfWeHlZkOY9t63' 
        ||
        route.path == '/add' && user.uid != '7W29HGeCdfPpqASfWeHlZkOY9t63'
        ){
         router.replace('/')
      }
      else {
        console.log(`there is a user`)
        isShow.value = true
        const user = auth.currentUser
        console.log(user)
        console.log(user.uid)
        getId.value = user.uid
        userName.value = user.email.split('@')[0]
      }
    })
   })

  

   return { isShow,userName, getId }
  },
  methods: {
    
signoutHandler () {
  const router = useRouter()
      signOut(auth)
      .then(() => {
        this.$swal({
        position: 'top-end',
        icon: 'success',
        title: 'Logged out successfully',
        showConfirmButton: false,
        timer: 1500
      })
        setTimeout(() => {
          window.location.reload()
        },1500)
        router.replace('/login')
      })
      .catch(err => console.log(err.message))
    }
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;1,600&display=swap');
#app {
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px !important;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.footer {
  background: #000;
  margin-top: auto;
  color: #fff;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
