<template>
  <WelcomeNav
    :getId="getId"
    :profileName="profileName"
    :userCredImg="userCredImg"
    :title="getId === '2TX6jUtjOZTACQuNJ5WFFUx8t5P2' ? 'Admin' : 'Hi'"
    :user="userName"
    :signoutHandler="signoutHandler"
    :isShowModalLoginHandler="isShowModalLoginHandler"
  />
  <div v-if="isShow && getId === '2TX6jUtjOZTACQuNJ5WFFUx8t5P2'">
    <AdminNav :user="userName" />
  </div>
  <div v-else-if="getId !== '2TX6jUtjOZTACQuNJ5WFFUx8t5P2'">
    <CustomerNavVue :user="userName" />
  </div>
  <router-view />
  <FooterView />
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { auth, usersCollectionRef } from "../src/firebase";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { onBeforeMount, ref } from "vue";
import AdminNav from "./components/AdminNav.vue";
import CustomerNavVue from "./components/CustomerNav.vue";
import WelcomeNav from "./components/WelcomeNav.vue";
import FooterView from "./components/FooterView.vue";
import { doc, getDoc } from "@firebase/firestore";

export default {
  name: "App",
  components: { AdminNav, CustomerNavVue, WelcomeNav, FooterView },
  setup() {
    const isShowModalLogin = ref(false);
    const userName = ref("");
    const isShow = ref(false);
    const router = useRouter();
    const getId = ref(null);
    const route = useRoute();
    const userCredImg = ref(null);
    const profileName = ref(null);
    onBeforeMount(() => {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          console.log("there is no user");
          // router.replace('/login')
        } else if (
          (user && route.path == "/login") ||
          (user && route.path == "/register")
        ) {
          router.replace("/");
          isShow.value = true;
        } else if (user && getId.value === "2TX6jUtjOZTACQuNJ5WFFUx8t5P2") {
          isShow.value = true;
          router.replace("/admin");
          userName.value = user.email.split("@")[0];
        } else if (
          (route.path == "/admin" &&
            user.uid != "2TX6jUtjOZTACQuNJ5WFFUx8t5P2") ||
          (route.path == "/add" &&
            user.uid != "2TX6jUtjOZTACQuNJ5WFFUx8t5P2") ||
          (route.path == "/admin" && !user) ||
          (route.path == "/add" && !user)
        ) {
          router.replace("/");
        } else {
          console.log(`there is a user`);
          isShow.value = true;
          const user = auth.currentUser;
          getId.value = user.uid;
          userName.value = user.email.split("@")[0];
          getDoc(doc(usersCollectionRef, user.uid)).then((doc) => {
            userCredImg.value = doc.data().image;
            profileName.value = doc.data().name;
            console.log(doc.data());
            console.log(userCredImg);
          });
        }
      });
    });

    const isShowModalLoginHandler = () => {
      isShowModalLogin.value = !isShowModalLogin.value;
    };

    return {
      isShow,
      userName,
      profileName,
      getId,
      userCredImg,
      isShowModalLogin,
      isShowModalLoginHandler,
    };
  },
  methods: {
    signoutHandler() {
      const router = useRouter();
      signOut(auth)
        .then(() => {
          this.$swal({
            position: "top-end",
            icon: "success",
            title: "Logged out successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          window.location.reload();
          window.location.assign("/");
        })
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;1,600&display=swap");
#app {
  font-family: "Work Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px !important;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-x: hidden;
}

.footer {
  background: #000;
  margin-top: auto;
  color: #fff;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

/* nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
