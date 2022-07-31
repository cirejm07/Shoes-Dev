<template>
<div class="md:col-span-1 md:flex md:justify-end">
  <nav class="text-right">
    <div class="flex justify-between items-center">
      <h1 class="font-bold uppercase p-4 border-b border-gray-100">
        <a href="/" class="text-sm md:text-xl">Shoes Brand</a>
      </h1>

      <div class="px-4 cursor-pointer md:hidden underline font-bold text-3xl" id="burger"> 
        =
      </div>
    </div>

      <ul class="text-gray-700 font-bold text-sm mt-6 hidden md:block" id="menu"> 
        <li class="py-1">
          <router-link to="/men" class="flex px-4 justify-end border-r-4 border-red-600"><span>Men</span></router-link>
        </li>
        <li class="py-1">
            <router-link to="/women" class="flex px-4 justify-end"><span>Women</span></router-link>
        </li>    
        <li class="py-1">
            <router-link to="/unisex" class="flex px-4 justify-end"><span>Unisex</span></router-link>
        </li>
      </ul>
  </nav>
</div>
</template>

<script>
export default {
    name: 'MenNav',
    // props: ['user', 'signoutHandler']
}
</script>

<style scoped>


</style>