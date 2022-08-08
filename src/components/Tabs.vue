<template>
  <ul
    class="container my-6 py-6 nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
    id="tabs-tab"
    role="tablist"
  >
    <li class="nav-item" role="presentation">
      <a
        href="#tabs-home"
        class="nav-link block font-sans text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-500 focus:border-transparent active"
        id="tabs-home-tab"
        data-bs-toggle="pill"
        data-bs-target="#tabs-home"
        role="tab"
        aria-controls="tabs-home"
        aria-selected="true"
        >Details</a
      >
    </li>
    <li class="nav-item" role="presentation">
      <a
        href="#tabs-profile"
        class="nav-link block font-sans text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-500 focus:border-transparent"
        id="tabs-profile-tab"
        data-bs-toggle="pill"
        data-bs-target="#tabs-profile"
        role="tab"
        aria-controls="tabs-profile"
        aria-selected="false"
        >Reviews</a
      >
    </li>
  </ul>
  <div class="tab-content" id="tabs-tabContent">
    <div
      class="tab-pane fade show active"
      id="tabs-home"
      role="tabpanel"
      aria-labelledby="tabs-home-tab"
    >
      {{ description }}
    </div>
    <div
      class="tab-pane fade"
      id="tabs-profile"
      role="tabpanel"
      aria-labelledby="tabs-profile-tab"
    >
      <CommentSection />
    </div>
  </div>
</template>

<script>
import { shoesCollectionRef } from '../firebase'
import { doc, getDoc  } from '@firebase/firestore'
import { ref } from '@vue/reactivity'
import { useRoute, useRouter } from 'vue-router'
import { onBeforeMount } from '@vue/runtime-core'
import CommentSection from '../components/CommentSection.vue'


export default {
    name: "Tabs",
    setup() {
        const cityId = ref(null);
        const route = useRoute();
        const router = useRouter();
        const shoeRef = ([]);
        cityId.value = route.params.id;
        const imageUrl = ref(null);
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
            }
            else {
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
        return { cityId, shoeRef, imageUrl, name, description, price, size, category, gender, backHistoryHandler };
    },
    components: { CommentSection }
}

</script>

<style></style>
