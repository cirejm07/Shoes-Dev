<template>
<div class="md:col-span-1 md:flex md:justify-end border-l-4 border-gray-200">
  <nav class="text-right">
    <div class="flex justify-between items-center">
      <h1 class="font-bold uppercase p-4 border-b border-gray-100">
        <a href="/" class="text-sm md:text-xl"> </a>
      </h1>
    </div>

      <ul class="text-gray-700 font-bold text-sm mt-6 flex justify-center gap-3 md:block" id="menu"> 
        <li class="py-1">
          <span @click="showAllShoeHandler">All</span>
        </li>
        <li class="py-1">
          <span @click="maleShoesHandler">Men</span>
        </li>
        <li class="py-1">
            <span @click="femaleShoesHandler">Women</span>
        </li>    
        <li class="py-1">
           <span @click="unisexShoesHandler">Unisex</span>
        </li>
      </ul>
  </nav>
</div>
</template>

<script>
export default {
    name: 'MenNav',
    props: ['showAllShoeHandler' , 'maleShoesHandler', 'femaleShoesHandler', 'unisexShoesHandler']
}
</script>

<style scoped>
span {
  cursor: pointer;
  position: relative;

}

span::before {
  content: "";
  width: 0%;
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #000;
  transition: all 0.5s ease;
}

span:hover::before {
  width: 100%;
}

span:hover {
  font-size: 17px;
  transform: scale(1.025);
  transition: all 0.5s ease
}



</style>