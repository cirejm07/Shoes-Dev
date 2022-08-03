<template>
  <div class="d-md-flex justify-content-center align-items-center">
    <div class="me-auto"></div>
    <div class="text-center ms-auto my-3">
      <!-- <router-link to="/men">Men</router-link> &nbsp;
    <router-link to="/women">Women</router-link> &nbsp;
    <router-link to="/unisex">Unisex</router-link> -->
      <div class="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
        <div class="flex items-center">
          <ul class="flex flex-row mt-0 mr-6 space-x-8 text-lg font-medium">
            <li>
              <router-link
                to="/"
                class="text-gray-900 dark:text-white uppercase"
                aria-current="page"
                >Home</router-link
              >
            </li>
            <li>
              <router-link
                to="/men"
                class="text-gray-900 dark:text-white uppercase"
                >Men's</router-link
              >
            </li>
            <li>
              <router-link
                to="/women"
                class="text-gray-900 dark:text-white uppercase"
                >Women's</router-link
              >
            </li>
            <li>
              <router-link
                to="/unisex"
                class="text-gray-900 dark:text-white uppercase"
                >Unisex's</router-link
              >
            </li>
            <li>
              <router-link
                to="/about"
                class="text-gray-900 dark:text-white uppercase"
                >About</router-link
              >
            </li>
            <li>
              <router-link
                to="/contact"
                class="text-gray-900 dark:text-white uppercase"
                >Contact</router-link
              >
            </li>
            <li>
              <router-link
                to="/blog"
                class="text-gray-900 dark:text-white uppercase"
                >Blog</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center my-3 ms-auto">
      <div class="search border-bottom">
        <fa icon="search" class="me-1" />
        <input @change="showListHandler" type="text" placeholder="Search" v-model="searchAllShoe"/>
        <div>
        </div>
        <div v-if="isShowLists && searchAllShoe.value !== ''" class="search-lists ">
          <ul v-for="shoe in searchAllShoeFilter" :key="shoe.id" class="list-none">
          <li><router-link class="flex justify-between align-items-center bg-slate-100 border" :to="{path:`/shoe/${shoe.id}`}"> <span class="text-xs">{{ shoe.name }}</span> <img class="w-10 h-10 ms-5" :src="shoe.imageUrl" alt=""> </router-link>  </li>
        </ul>
        </div>
      </div>
    </div>
    <div class="cart">
      <fa icon="cart-shopping" class="mt-2 mx-3" />
      <span></span>
    </div>
  </div>
</template>

<script>
import { onSnapshot } from '@firebase/firestore';
import { computed, onMounted, ref } from '@vue/runtime-core';
import { shoesCollectionRef } from '../firebase';

export default {
  name: "CustomerNav",
  props: ["user"],
  setup() {

    const shoes = ref([])
    const searchAllShoe = ref('')
    const isShowLists = ref(false)
    onMounted(() => {
       onSnapshot(shoesCollectionRef, (querySnapshot) => {
  const getShoes = [];
  querySnapshot.forEach((doc) => {
    const shoe = {
      id: doc.id,
      category: doc.data().category,
      description: doc.data().description,
      gender: doc.data().gender,
      imageUrl: doc.data().imageUrl,
      name: doc.data().name,
      price: doc.data().price,
      size: doc.data().size
    }
      getShoes.push(shoe)
  })
    shoes.value = getShoes

    })

    })

     const searchAllShoeFilter = computed(() => {
      return shoes.value.filter(
        ({ name }) => [ name ]
          .some(val => val.toLowerCase().includes(searchAllShoe.value.toLowerCase()))
      );
    })

    const showListHandler = () =>{
          isShowLists.value = !isShowLists.value
      }


    return { shoes, searchAllShoe, searchAllShoeFilter, isShowLists, showListHandler }
  }

};
</script>

<style scoped>
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
  background: blue;
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

input[type="text"]:focus {
  outline: none;
  border: none;
}

.search {
  position: relative;
}

.search-lists {
  position: absolute;
  width: 100%;
  top: 110%;
  left: -8%;
  transform: translate(-8%, -0%);
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
  padding: 0 2px;
  margin: 0;
  box-sizing: border-box;
  color: #42b983;
}
</style>
