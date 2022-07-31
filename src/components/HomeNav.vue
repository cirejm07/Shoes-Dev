<template>
<div class="">
  <nav class="">
    <div class="flex">
      <h1 class="font-bold uppercase p-4 border-b border-gray-100">
        <a href="/" class="text-sm md:text-xl">Shoes Brand</a>
      </h1>
<ul class="text-gray-700 font-bold text-sm mt-6" id="menu"> 
        
          <router-link to="/men" class="flex justify-evenly px-4 border-b-4 border-red-600"><span>Men</span></router-link>
        
            <router-link to="/women" class="flex justify-evenly px-4"><span>Women</span></router-link>
        
            <router-link to="/unisex" class="flex justify-evenly px-4"><span>Unisex</span></router-link>
        
      </ul>
      <div class="px-4 cursor-pointer md:hidden underline font-bold text-3xl" id="burger"> 
        =
      </div>
    </div>

      
  </nav>
</div>
</template>

<script>
export default {
    name: 'HomeNav',
    // props: ['user', 'signoutHandler']
}
</script>

<style scoped>


</style>