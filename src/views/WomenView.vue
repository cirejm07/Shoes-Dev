<template>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <div id="list-example" class="list-group d-flex flex-row"><br><br>
          <a class="list-group-item list-group-item-action" href="#brand-1"><img src="@/assets/brand-hero-logo.png" style="width: 45px; height: 25px;" alt=""></a>
          <a class="list-group-item list-group-item-action" href="#brand-2">Basketball</a>
          <a class="list-group-item list-group-item-action" href="#brand-3">Running</a>
          <a class="list-group-item list-group-item-action" href="#brand-4">Walking</a>
          <a class="list-group-item list-group-item-action" href="#brand-5">Training/Gym</a>
        </div>
      </div>
      <div class="col-10 mt-5">
        <div data-bs-spy="scroll">
          <h6 id="brand-1"></h6>
          
        </div>
      </div>
    </div>
<div class="container my-2">
  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="2000">
        <img src="https://www.breakthroughbasketball.com/store/images/hoops/landing_header.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item" data-bs-interval="2000" >
        <img src="https://www.letsdothis.com/blog/wp-content/uploads/2019/10/male-running.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://www.arthritis.org/getmedia/64baa9af-fb3d-40e4-b6cf-0305c5a1591c/Health_WalkingStrategy_Thumb.png?width=600&height=325&ext=.png" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>
  
    <div class="row">
      <div class="col-2 mt-5">
        <div id="list-example" class="list-group">
          <a class="list-group-item list-group-item-action" href="#brand-1"><img src="@/assets/brand-hero-logo.png" style="width: 45px; height: 25px;" alt=""></a>
          <a class="list-group-item list-group-item-action" href="#brand-2">Basketball</a>
          <a class="list-group-item list-group-item-action" href="#brand-3">Running</a>
          <a class="list-group-item list-group-item-action" href="#brand-4">Walking</a>
          <a class="list-group-item list-group-item-action" href="#brand-5">Training/Gym</a>
        </div>
      </div>
      
      <div class="col-10 mt-4">
        <div data-bs-spy="scroll">
          <h6 id="brand-2">Basketball</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita dolorum reprehenderit porro excepturi distinctio atque nesciunt nulla nisi exercitationem alias rerum nobis recusandae provident incidunt, ex eligendi fuga debitis voluptates!</p>
            <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
              <div class="col" v-for="shoe in basketball" :key="shoe.id">
                <div class="card h-100">
                  <img :src="shoe.imageUrl" :alt="shoe.name">
                    <div class="card-footer">
                      <h5 class="card-title">{{ shoe.name }}</h5>
                      <p class="card-text">{{ shoe.gender }}</p>
                      <p class="card-text">{{ shoe.category }}</p>
                    </div>
                </div>
              </div>
              <button class="btn btn-secondary">View more</button>
            </div>
          </div>
        </div>
      </div>

    <div class="row">
      <div class="col-2 mt-5"><br><br><br><br><br><br><br><br>
        <div id="list-example" class="list-group">
          <a class="list-group-item list-group-item-action" href="#brand-1"><img src="@/assets/brand-hero-logo.png" style="width: 45px; height: 25px;" alt=""></a>
          <a class="list-group-item list-group-item-action" href="#brand-2">Basketball</a>
          <a class="list-group-item list-group-item-action" href="#brand-3">Running</a>
          <a class="list-group-item list-group-item-action" href="#brand-4">Walking</a>
          <a class="list-group-item list-group-item-action" href="#brand-5">Training/Gym</a>
        </div>
      </div>
      
      <div class="col-10 mt-4"><br><br><br><br><br><br><br><br>
        <div data-bs-spy="scroll">
          <h6 id="brand-3">Running</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita dolorum reprehenderit porro excepturi distinctio atque nesciunt nulla nisi exercitationem alias rerum nobis recusandae provident incidunt, ex eligendi fuga debitis voluptates!</p>
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col" v-for="shoe in running" :key="shoe.id">
                <div class="card h-100">
                  <img :src="shoe.imageUrl" :alt="shoe.name">
                    <div class="card-footer">
                      <h5 class="card-title">{{ shoe.name }}</h5>
                      <p class="card-text">{{ shoe.gender }}</p>
                      <p class="card-text">{{ shoe.category }}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div class="row">
      <div class="col-2 mt-5"><br><br><br><br><br><br><br><br>
        <div id="list-example" class="list-group">
          <a class="list-group-item list-group-item-action" href="#brand-1"><img src="@/assets/brand-hero-logo.png" style="width: 45px; height: 25px;" alt=""></a>
          <a class="list-group-item list-group-item-action" href="#brand-2">Basketball</a>
          <a class="list-group-item list-group-item-action" href="#brand-3">Running</a>
          <a class="list-group-item list-group-item-action" href="#brand-4">Walking</a>
          <a class="list-group-item list-group-item-action" href="#brand-5">Training/Gym</a>
        </div>
      </div>
      
      <div class="col-10 mt-4"><br><br><br><br><br><br><br><br>
        <div data-bs-spy="scroll">
          <h6 id="brand-4">Walking</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita dolorum reprehenderit porro excepturi distinctio atque nesciunt nulla nisi exercitationem alias rerum nobis recusandae provident incidunt, ex eligendi fuga debitis voluptates!</p>
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col" v-for="shoe in walking" :key="shoe.id">
                <div class="card h-100">
                  <img :src="shoe.imageUrl" :alt="shoe.name">
                    <div class="card-footer">
                      <h5 class="card-title">{{ shoe.name }}</h5>
                      <p class="card-text">{{ shoe.gender }}</p>
                      <p class="card-text">{{ shoe.category }}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
      <div class="col-2 mt-5"><br><br><br><br><br><br><br><br>
        <div id="list-example" class="list-group">
          <a class="list-group-item list-group-item-action" href="#brand-1"><img src="@/assets/brand-hero-logo.png" style="width: 45px; height: 25px;" alt=""></a>
          <a class="list-group-item list-group-item-action" href="#brand-2">Basketball</a>
          <a class="list-group-item list-group-item-action" href="#brand-3">Running</a>
          <a class="list-group-item list-group-item-action" href="#brand-4">Walking</a>
          <a class="list-group-item list-group-item-action" href="#brand-5">Training/Gym</a>
        </div>
      </div>
      
      <div class="col-10 mt-4"><br><br><br><br><br><br><br><br>
        <div data-bs-spy="scroll">
          <h6 id="brand-5">Training/Gym</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita dolorum reprehenderit porro excepturi distinctio atque nesciunt nulla nisi exercitationem alias rerum nobis recusandae provident incidunt, ex eligendi fuga debitis voluptates!</p>
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col" v-for="shoe in training" :key="shoe.id">
                <div class="card h-100">
                  <img :src="shoe.imageUrl" :alt="shoe.name">
                    <div class="card-footer">
                      <h5 class="card-title">{{ shoe.name }}</h5>
                      <p class="card-text">{{ shoe.gender }}</p>
                      <p class="card-text">{{ shoe.category }}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div><br><br><br><br><br><br><br><br>

        </div>
        <div><br><br><br><br><br><br><br><br>

        </div>
      </div>
    </div>

<!-- <button v-if="name" @click="signOutHandler" class="btn btn-primary col-3 mb-4 justify-content-center">Sign out</button> -->

  <!-- <div>
    <h1>LuzViMinda</h1>
  <div class="d-flex">
    <div v-for="shoe in shoes" :key="shoe.id" class="home">
  <div class="card" style="width: 18rem; height: 20rem;">
  <img :src="shoe.imageUrl" class="card-img-top" :alt="shoe.imgUrl">
  <div class="card-body">
    <h5 class="card-title">Name - {{shoe.name}}</h5>
    <p>Price - {{shoe.price}}</p>
    <p>Category: {{shoe.category}}</p>
    <p>Gender - {{shoe.gender}}</p>
  </div>
</div>
  </div>
  </div>
  </div> -->
</template>

<script>
import { ref } from '@vue/reactivity'
import { auth, shoesCollectionRef } from '@/firebase'
import { onBeforeMount, onMounted } from '@vue/runtime-core'
import { onSnapshot } from '@firebase/firestore'
export default {
    name:'WomenView',
    setup() {
      const name = ref('')
    const shoes = ref([])
    const basketball = ref([])
    const running = ref([])
    const walking = ref([])
    const training = ref([])
    onBeforeMount(() => {
        let user = auth.currentUser;
      if(user) {
       name.value = user.email.split('@')[0]
      }
    })

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
    basketball.value = getShoes.filter((getShoe) => getShoe.gender === 'Female' && getShoe.category === 'Basketball').slice(0,3)
    running.value = getShoes.filter((getShoe) => getShoe.gender === 'Female' && getShoe.category === 'Running')
    walking.value = getShoes.filter((getShoe) => getShoe.gender === 'Female' && getShoe.category === 'Walking')
    training.value = getShoes.filter((getShoe) => getShoe.gender === 'Female' && getShoe.category === 'Training & Gym')
    })
    })
    
    return { name, shoes, basketball, running, walking, training }
    }
}
</script>

<style scoped>
.carousel-item img{
  width: 100% !important;
  height: 600px !important;
}

</style>