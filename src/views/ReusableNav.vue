<template>
  <WelcomeNav :title="getId === '7W29HGeCdfPpqASfWeHlZkOY9t63' ? 'Admin' : 'Hi'" :user="userName" :signoutHandler="signoutHandler" />
  <div v-if="isShow && getId === '7W29HGeCdfPpqASfWeHlZkOY9t63'">
   <AdminNav :user="userName" :signoutHandler="signoutHandler" />
  </div>
  <div v-else-if="getId !== '7W29HGeCdfPpqASfWeHlZkOY9t63'">
    <CustomerNavVue :user="userName" :signoutHandler="signoutHandler" />
  </div>

</template>

<script>
import AdminNav from '../components/AdminNav.vue'
import CustomerNavVue from '../components/CustomerNav.vue'
import WelcomeNav from '../components/WelcomeNav.vue'
import FooterView from '../components/FooterView.vue'
export default {
    name: 'ReusableNav',
    components: { AdminNav, CustomerNavVue, WelcomeNav, FooterView },
}
</script>

<style>

</style>