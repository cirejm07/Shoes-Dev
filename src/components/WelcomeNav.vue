<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link class="uppercase font-bold text-3xl font-serif text-blue-500" to="/"
        >SHOES <span class="italic lowercase">Athletic</span>
        </router-link
      >
      <!-- <span class="text-xs italic font-thin text-center"
        ><br />Limited discount awaits for first purchase!</span
      > -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        v-if="user"
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        

      <div class="btn-group dropstart ms-auto">
  <button type="button" class="btn btn-transparent dropdown-toggle d-flex flex-wrap align-middle justify-center" data-bs-toggle="dropdown" aria-expanded="false">
     <span class="me-2 my-auto">{{ title }}, {{ profileName }}</span>
            <span v-if="userCredImg"> <img class="user-img" :src="userCredImg" :alt="user"> </span>
            <span v-else><fa icon="user"></fa> </span>
  </button>
   <ul class="dropdown-menu">
             <li>
                <router-link :to="{path:`/profile/${getId}`}" class="dropdown-item">Profile</router-link>
              </li>
              <li>
                <button @click="signoutHandler" class="dropdown-item">
                  Sign out
                </button>
              </li>
            </ul>
</div>


        <!-- <div class="btn-group dropstart ms-auto">
          <button
            type="button"
            class="btn btn-light dropdown-toggle dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           
          </button>
          <button
            type="button"
            class="btn btn-light dropdown-toggle dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
             <span>{{ title }}, {{ user }}</span>
            <span v-if="userCredImg"> <img class="user-img" :src="userCredImg" :alt="user"> </span>
            <span v-else><fa icon="user"></fa> </span>
            <ul class="dropdown-menu">
              <li>
                <button @click="signoutHandler" class="dropdown-item">
                  Sign out
                </button>
              </li>
            </ul>
            
          </button>
        </div> -->

      </div>
      <div v-else class="nav-right collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Split dropstart button -->
        <div class="ms-auto">
          <ModalLogin />
        </div>
      </div>
    </div>
    
</nav>
</template>

<script>
import ModalLogin from './ModalLogin.vue';
export default {
    name: "WelcomeNav",
    props: ["user", "signoutHandler", "title", "isShowModalLoginHandler", "userCredImg", "getId", "profileName"],
    setup() { },
    components: { ModalLogin }
};
</script>

<style scoped>
nav {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 14px;
}
img {
  width: 100px;
  height: 50px;
}

.user-img {
  width: 35px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid beige;
}

.dropstart .dropdown-toggle::before {
  display: none;
}

button {
  border: none;
}

</style>
