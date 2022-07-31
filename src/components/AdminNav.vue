<template>
  <div class="nav">
    <router-link to="/admin">Admin</router-link> |
    <router-link to="/add">Add</router-link>
  </div>
</template>

<script>



export default {
    name: 'AdminNav',
    props: ['user', 'signoutHandler'],
setup(){
    
    }
}
</script>

<style scoped>

.nav{
  display: flex;
  justify-content: center;
}

a {
    font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}


a.router-link-exact-active {
  color: #42b983;
}

</style>