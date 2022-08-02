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
        <input type="text" placeholder="Search" />
      </div>
    </div>
    <div class="cart">
      <fa icon="cart-shopping" class="mt-2 mx-3" />
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerNav",
  props: ["user", "signoutHandler"],
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
