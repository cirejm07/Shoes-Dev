<template>
  <body class="bg-blue-100 font-sans leading-normal tracking-normal">
    <!--Header-->
    <div
      class="w-full m-0 p-0 bg-cover bg-bottom object-cover"
      style="
        background-image: url('https://www.rei.com/dam/20210315-f21-portland-1112030-torrent-2-osat-08_htc-road-running-shoes_torrent.jpg');
        height: 80vh;
        max-height: 90vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      "
    >
      <div
        class="container max-w-4xl mx-auto pt-32 md:pt-36 text-center break-normal block"
      >
        <p class="text-xl md:text-3xl text-white uppercase pb-8">
          The Season Begins
        </p>
        <p
          class="text-white font-bold text-3xl md:text-6xl uppercase italic"
        >
          PROMOTION <span class="text-red-500 font-extrabold">SALE OFF 50%</span>
        </p>
        
        <router-link to="/men"><button
          class="bg-blue-800 hover:bg-blue-500 text-white font-bold text-lg mt-2 py-3 px-4 hover:scale-95 ease-in-out duration-200"
        >
          Buy Now!
        </button></router-link>
        <p class="text-xl md:text-6xl text-white uppercase mt-5">
          Before Offer Ends
        </p>
      </div>
    </div>

    <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
      <div class="mx-0 sm:mx-6">
        <!--Nav-->
        <nav class="mt-0 w-full">
          <div class="container mx-auto flex items-center">
            <div class="mb-5 flex w-1/2 justify-end content-center"></div>
          </div>
        </nav>

        <div
          class="bg-blue-100 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t"
        >
          <!--Lead Card-->
          <div
            v-for="shoe in trendingShoe"
            :key="shoe.id"
            class="flex h-full bg-white rounded overflow-hidden shadow-lg"
          >
            <router-link
              :to="{ path: `/shoe/${shoe.id}` }"
              class="flex flex-wrap no-underline hover:no-underline"
            >
              <div class="w-full md:w-2/3 rounded-t">
                <img
                  style="height: 500px; width: 100%"
                  :src="shoe.imageUrl"
                  class="h-full w-full shadow"
                />
              </div>

              <div class="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                <div
                  class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"
                >
                  <div
                    class="mt-3 w-full font-bold text-xl text-blue-700 px-6 uppercase"
                  >
                    Trending
                  </div>
                  <p
                    class="w-full mt-2 text-gray-800 font-serif text-base px-6 mb-5"
                  >
                    {{ shoe.name }}
                  </p>
                  <p class="w-100 text-gray-800 font-serif text-base px-6 mb-5">
                    <!-- {{ shoe.description }} -->
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Rem, suscipit. Impedit corporis amet dolorem inventore
                    dignissimos cumque alias minima quod quae itaque laborum hic
                    qui architecto, repellendus dicta tempore quidem voluptate
                    dolor provident ipsam at soluta labore minus iusto?
                    Molestias exercitationem tempora molestiae inventore quasi,
                    nostrum enim nisi aliquam iure.
                  </p>
                </div>

                <div
                  class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6"
                >
                  <div class="flex items-center justify-between">
                    <img
                      class="w-8 h-8 rounded-full mr-4 avatar"
                      data-tippy-content="Author Name"
                      src="http://i.pravatar.cc/300"
                      alt="Avatar of Author"
                    />
                    <p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <!--/Lead Card-->
          <!--Posts Container-->
          <div class="flex flex-wrap justify-between pt-12 -mx-6">
            <!--1/3 col -->
            <div
              class="h-50 w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
            >
              <div
                class="card-container flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg hover:scale-95 ease-in-out duration-200"
              >
                <router-link
                  to="/men"
                  class="flex flex-wrap no-underline hover:no-underline"
                >
                  <img
                    src="https://images.unsplash.com/photo-1582274528667-1e8a10ded835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    class="h-64 w-full rounded-t"
                  />
                  <p
                    class="gender-card w-full text-gray-600 text-xs md:text-sm px-6"
                  >
                    Men
                  </p>
                </router-link>
              </div>
            </div>
            <!--1/3 col -->
            <div
              class="h-50 w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
            >
              <div
                class="card-container flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg hover:scale-95 ease-in-out duration-200"
              >
                <router-link
                  to="/women"
                  class="flex flex-wrap no-underline hover:no-underline"
                >
                  <img
                    src="https://images.unsplash.com/photo-1616847220575-31b062a4cd05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    class="h-64 w-full rounded-t"
                  />
                  <p
                    class="gender-card w-full text-gray-600 text-xs md:text-sm px-6"
                  >
                    Women
                  </p>
                </router-link>
              </div>
            </div>
            <!--1/3 col -->
            <div
              class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
            >
              <div
                class="card-container flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg hover:scale-95 ease-in-out duration-200"
              >
                <router-link
                  to="/unisex"
                  class="flex flex-wrap no-underline hover:no-underline"
                >
                  <img
                    src="https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    class="h-64 w-full rounded-t"
                  />
                  <p
                    class="gender-card w-full text-gray-600 text-xs md:text-sm px-6"
                  >
                    Unisex
                  </p>
                </router-link>
              </div>
            </div>
            <!-- Offers here-->
            <Offers />
            <!-- Testimonials here-->
            <Testimonials />
          </div>
        </div>
        <!-- News letter here-->
        <news-letter />
      </div>
    </div>
  </body>
</template>

<script>
import { ref } from "@vue/reactivity";
import { auth, shoesCollectionRef } from "../firebase";
import { onBeforeMount, onMounted } from "@vue/runtime-core";
import { deleteDoc, doc, onSnapshot } from "@firebase/firestore";
import Testimonials from "../components/Testimonials.vue";
import NewsLetter from "../components/NewsLetter.vue";
import Offers from "../components/Offers.vue";

export default {
  name: "TheHomePage",
  components: { Testimonials, NewsLetter, Offers },
  setup() {
    const name = ref("");
    const menShoe = ref([]);
    const womenShoe = ref([]);
    const uniSexShoe = ref([]);
    const trendingShoe = ref([]);

    onBeforeMount(() => {
      let user = auth.currentUser;
      if (user) {
        name.value = user.email.split("@")[0];
      }
    });

    onMounted(() => {
      onSnapshot(shoesCollectionRef, (querySnapshot) => {
        const getShoes = [];
        querySnapshot.forEach((doc) => {
          const shoe = {
            id: doc.id,
            category: doc.data().category,
            description: doc.data().description,
            gender: doc.data().gender,
            imageUrl: doc.data().image,
            name: doc.data().name,
            price: doc.data().price,
            size: doc.data().size,
          };
          getShoes.push(shoe);
        });
        menShoe.value = getShoes
          .filter(
            (getShoe, index) =>
              getShoe.gender === "Male" &&
              Math.ceil((index * Math.random()) << 0)
          )
          .slice(0, 1);
        womenShoe.value = getShoes
          .filter(
            (getShoe, index) =>
              getShoe.gender === "Female" &&
              Math.ceil((index * Math.random()) << 0)
          )
          .slice(0, 1);
        uniSexShoe.value = getShoes
          .filter(
            (getShoe, index) =>
              getShoe.gender === "Unisex" &&
              Math.ceil((index * Math.random()) << 0)
          )
          .slice(0, 1);
        trendingShoe.value = getShoes
          .filter((getShoe, index) =>
            Math.floor(Math.random() * Math.floor(Math.random() * index))
          )
          .slice(0, 1);
      });
    });

    const deleteHandler = async (shoeId) => {
      try {
        let shoeRef = doc(shoesCollectionRef, shoeId);
        await deleteDoc(shoeRef);
        alert("shoe deleted");
      } catch (error) {
        console.log(error);
      }
    };

    return {
      name,
      menShoe,
      womenShoe,
      uniSexShoe,
      deleteHandler,
      trendingShoe,
    };
  },
};
</script>

<style scoped>
.card-container {
  position: relative;
}
.card-container img {
  height: 400px;
}
.gender-card {
  background: rgba(0, 0, 0, 0.7);
  padding: 2px 10px;
  position: absolute;
  left: 10;
  bottom: 40%;
  transform: translate(-10%, 40%);
  width: 40%;
  text-align: left;
  width: fit-content;
  text-transform: uppercase;
  color: #fff;
}
/* CSS added only for */
.-skew-x-12 {
  transform: skewX(-12deg);
}
.skew-x-12 {
  transform: skewX(12deg);
}
</style>
