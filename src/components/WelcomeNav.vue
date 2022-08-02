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
        <!-- Split dropstart button -->
        <div class="btn-group dropstart ms-auto">
          <button
            type="button"
            class="btn btn-light dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span>{{ title }}, {{ user }}</span>
          </button>
          <button
            type="button"
            class="btn btn-light dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <fa icon="user" />
            <ul class="dropdown-menu">
              <li>
                <button @click="signoutHandler" class="dropdown-item">
                  Sign out
                </button>
              </li>
            </ul>
          </button>
        </div>
      </div>
      <div
        v-else
        class="nav-right collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <!-- Split dropstart button -->
        <div class="ms-auto">
          <router-link to="/register" aria-expanded="false">
            Signup
          </router-link>
          |
          <router-link to="/login">Login</router-link>
        </div>
        
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "WelcomeNav",
  props: ["user", "signoutHandler", "title"],
  setup() {},
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

.dropstart .dropdown-toggle-split::before {
  display: none;
}

button {
  border: none;
}

</style>
