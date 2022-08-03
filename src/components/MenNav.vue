<template>
<div class="md:col-span-1 md:flex md:justify-end border-l-4 border-gray-200">
  <nav class="text-right">
    <div class="flex justify-between items-center">
      <h1 class="font-bold uppercase p-4 border-b border-gray-100">
        <a href="/" class="text-sm md:text-xl"> </a>
      </h1>

      <div class="px-4 cursor-pointer md:hidden underline font-bold text-3xl" id="burger"> 
        = 
      </div>
    </div>

      <ul class="text-gray-700 font-bold text-sm mt-6 flex flex-wrap justify-center gap-3 md:block" id="menu"> 
        <li class="py-1">
          <span @click="showAllHandler">All</span>
        </li>
        <li class="py-1">
          <span @click="basketHandler">Basketball</span>
        </li>
        <li class="py-1">
            <span @click="walkingHandler">Walking</span>
        </li>    
        <li class="py-1">
           <span @click="runningHandler">Running</span>
        </li>
        <li class="py-1">
           <span @click="trainingAndGymHandler">Training & Gym</span>
        </li>
      </ul>
  </nav>
</div>
</template>

<script>
export default {
    name: 'MenNav',
    props: ['basketHandler', 'walkingHandler', 'runningHandler', 'trainingAndGymHandler', 'showAllHandler']
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