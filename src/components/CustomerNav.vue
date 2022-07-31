<template>
  <div class="text-center mt-1">
        <router-link to="/men">Men</router-link> |
    <router-link to="/women">Women</router-link> |
    <router-link to="/unisex">Unisex</router-link>
  </div>
</template>

<script>
export default {
    name: 'CustomerNav',
    props: ['user', 'signoutHandler']
}
</script>

<style scoped>

a {
  font-weight: bold;
  color: #2c3e50 ;
  text-decoration: none;
}

a:hover{
  color: #42b983 !important;
}


a.router-link-exact-active {
  color: #42b983;
}


</style>