<template>
 <div class="d-md-flex justify-content-center align-items-center">
  <div class="me-auto">

  </div>
   <div class="text-center ms-auto my-3">
        <router-link to="/men">Men</router-link> &nbsp;
    <router-link to="/women">Women</router-link> &nbsp;
    <router-link to="/unisex">Unisex</router-link>
  </div>
  <div class="text-center my-3 ms-auto">
     <div class="search border-bottom">
    <fa icon="search" class="me-1"/>
    <input type="text" placeholder="Search">
     </div>
  </div>
  <div class="cart">
    <fa icon="cart-shopping" class="mt-2 mx-3"/>
    <span>0</span>
  </div>
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
  position: relative;
}

a::before{
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 1.5px;
  background: #2c3e50;
  transition: width 0.5s ease;
}

a:hover {
  color: #000 !important;
}

a:hover::before{
width: 100%;
}



a.router-link-exact-active {
  border-bottom: 2px solid #000;
}

input[type='text']:focus{
  outline: none;
  border: none;
}

.cart {
  position: relative;
  width: fit-content;
}

.cart span {
  position: absolute;
  right: 20%;
  top: -10%;
  transform: translate(10%, -30%);
  padding: 0  2px;
  margin: 0;
  box-sizing: border-box;
  color: #42b983;
}

</style>