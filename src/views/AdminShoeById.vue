<template>
  <div
    class="space-x-3 container d-flex justify-content-center align-items-center"
  >
    <div class="row container">
      <div class="flex">
        <p @click="backHistoryHandler" class="btn btn-outline-primary">Back</p>
      </div>
      <div
        class="bg-blend-darken col-lg-6 d-md-flex justify-content-lg-center border-2"
      >
        <div>
          <img :src="imageUrl" :alt="name" />
        </div>
      </div>
      <div
        class="col-lg-6 bg-blend-darken text-center border-2 pt-3"
      >
        <span class="fw-bold text-lg">Shoe Brand: {{ brand }}</span>
        <span class="fw-bold block">{{ name }}</span>
        <p class="mt-1">Gender: {{ gender }}</p>
        <div class="pb-3 pt-2">
          <select name="" id="">
            <option value="" selected="selected">Select Color</option>
            <option value="red" id="red">Red</option>
            <option value="green" id="green">Green</option>
            <option value="blue" id="blue">Blue</option>
            <option value="yellow" id="yellow">Yellow</option>
            <option value="purple" id="purple">Purple</option>
          </select>
        </div>
  
        <p class="text-start">
          As low as: <span class="text-xl text-red-600">₱ {{ price }}</span>
        </p>
        <div class="flex space-x-3">
          <img
            :src="imageUrl"
            style="
              width: 50px;
              height: 50px;
              border: 1px solid black;
              border-radius: 5px;
            "
          />
          <img
            :src="imageUrl"
            style="
              width: 50px;
              height: 50px;
              border: 1px solid black;
              border-radius: 5px;
            "
          />
          <img
            :src="imageUrl"
            style="
              width: 50px;
              height: 50px;
              border: 1px solid black;
              border-radius: 5px;
            "
          />
        </div>
        <p class="btn btn-primary border rounded-1 mt-3 hover:scale-110 ease-in-out duration-300">Add to cart</p>

        <!-- <p>{{ description }}</p> -->
      </div>
    </div>
    <div class="mt-4 col-lg-2 border-2">
      <div class="border-b-2">
        <img class="img-side" src="../assets/freetruck2.png" />
        <p class="pt-2 uppercase text-md font-bold">Free Delivery</p>
        <p class="mt-0 pt-0 text-xs">For all subscribers</p>
      </div>
      <div class="border-b-2">
        <img class="img-side pt-2" src="../assets/refund.png" />
        <p class="pt-2 uppercase text-md font-bold">Return and Refund</p>
        <p class="mt-0 pt-0 text-xs">Only Accept reasonable return</p>
      </div>
      <div class="">
        <img class="img-side" src="../assets/payment2.jpg" />
        <p class="pt-2 uppercase text-md font-bold">Various Payment Options Available</p>
        <p class="mt-0 pt-0 text-xs">Select mode of payment</p>
      </div>
    </div>
  </div>
  <div class="col-lg-12">
    <Tabs />
  </div>
</template>

<script>
import { shoesCollectionRef } from "../firebase";
import { doc, getDoc } from "@firebase/firestore";
import { ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { onBeforeMount } from "@vue/runtime-core";
import CommentSection from "../components/CommentSection.vue";
import Tabs from "../components/Tabs.vue";

export default {
  name: "AdminShoeById",
  setup() {
    const cityId = ref(null);
    const route = useRoute();
    const router = useRouter();
    const shoeRef = [];
    cityId.value = route.params.id;
    const imageUrl = ref(null);
    const brand = ref(null);
    const name = ref(null);
    const description = ref(null);
    const price = ref(null);
    const size = ref(null);
    const category = ref(null);
    const gender = ref(null);
    onBeforeMount(async () => {
      const docRef = doc(shoesCollectionRef, cityId.value);
      shoeRef.value = docRef;
      console.log(shoeRef);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        let ImageUrlData = docSnap.data().image;
        imageUrl.value = ImageUrlData;
        let brandData = docSnap.data().brand;
        brand.value = brandData;
        let nameData = docSnap.data().name;
        name.value = nameData;
        let descriptionData = docSnap.data().description;
        description.value = descriptionData;
        let priceData = docSnap.data().price;
        price.value = priceData;
        let sizeData = docSnap.data().size;
        size.value = sizeData;
        let categoryData = docSnap.data().category;
        category.value = categoryData;
        let genderData = docSnap.data().gender;
        gender.value = genderData;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    });
    const backHistoryHandler = () => {
      router.go(-1);
      setTimeout(() => {
        window.location.reload();
      }, 100);
    };
    return {
      cityId,
      shoeRef,
      imageUrl,
      brand,
      name,
      description,
      price,
      size,
      category,
      gender,
      backHistoryHandler,
    };
  },
  components: { CommentSection, Tabs },
};
</script>

<style scoped>
img {
  width: 300px;
  height: 250px;
}
.img-side {
  width: auto;
  height: 60px;
  margin: auto;
  /* border: 1px solid black; */
  /* border-radius: 5px;
    justify-content: center;
    text-align: center;
    align-items: center; */
}
</style>
