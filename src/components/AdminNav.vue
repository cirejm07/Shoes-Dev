<template>
  <div class="nav my-3">
    <router-link to="/admin">Admin</router-link> &nbsp;
    &nbsp; <router-link to="/add">Add</router-link>
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
  position: relative;
}

a::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10%;
  width: 0%;
  height: 1.5px;
  background: #42b983;
  transition: width 0.5s ease;
}

a:hover {
  color: #000 !important;
}

a:hover::before {
  width: 100%;
}

a.router-link-exact-active {
  border-bottom: 2px solid #000;
}

</style>