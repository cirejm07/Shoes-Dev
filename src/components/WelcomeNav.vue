<template>
  <nav class="navbar navbar-expand-lg bg-blue-200">
    <div class="container-fluid">
      <router-link class="font-bold text-3xl font-sans text-blue-500" to="/"
        >SHOES<span class="italic lowercase">.Dev</span>
        <p class="text-xs italic">Athletic shoes for all ages!</p>
      </router-link>
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
          <button
            type="button"
            class="btn btn-transparent dropdown-toggle d-flex flex-wrap align-middle justify-center"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="me-2 my-auto text-black text-lg italic hover:text-xl"
              >{{ title }}, {{ profileName }} !</span
            >
            <span v-if="userCredImg">
              <img class="user-img" :src="userCredImg" :alt="user" />
            </span>
            <span v-else><fa icon="user"></fa> </span>
          </button>
          <ul class="dropdown-menu">
            <li>
              <router-link
                :to="{ path: `/profile/${getId}` }"
                class="dropdown-item"
                >Profile</router-link
              >
            </li>
            <li>
              <button @click="signoutHandler" class="dropdown-item">
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div
        v-else
        class="nav-right collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <!-- Split dropstart button -->
        <div class="ms-auto">
          <ModalLogin />
          <!-- <CustomerNav :user="userName" /> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ModalLogin from "./ModalLogin.vue";
import CustomerNav from "./CustomerNav.vue";
export default {
  name: "WelcomeNav",
  props: [
    "user",
    "signoutHandler",
    "title",
    "isShowModalLoginHandler",
    "userCredImg",
    "getId",
    "profileName",
  ],
  setup() {},
  components: { ModalLogin, CustomerNav },
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
