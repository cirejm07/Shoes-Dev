<template>
  <div class="profile container max-w-md py-8">
    <form @submit.prevent="updateHandler" class="container">
      <div class="row">
        <div class="col-6">
          <div class="d-flex justify-center">
            <img :src="image" :alt="name" style="width: 250px; height: 300px" />
          </div>
          <div v-if="loadingState">
            {{ loadingState }}
          </div>
        </div>
        <div class="col-6">
          <div class="my-3">
            <label for="image-url" class="form-label">Image</label>
            <input
              @change="imageHandler"
              type="file"
              class="form-control"
              id="image-url"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 col">
            <label for="name" class="form-label">Name</label>
            <input
              v-model="name"
              type="text"
              class="form-control"
              id="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 col">
            <label for="address" class="form-label">Address</label>
            <input
              v-model="address"
              type="text"
              class="form-control"
              id="address"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="col-4 my-4 mx-auto">
            <button type="submit" class="btn btn-primary">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { doc, getDoc, setDoc } from "@firebase/firestore";
import { onBeforeMount, ref } from "@vue/runtime-core";
import { usersCollectionRef } from "../firebase";
import { useRoute, useRouter } from "vue-router";
import {
  getDownloadURL,
  getStorage,
  ref as imageRef,
  uploadBytes,
  uploadBytesResumable,
} from "@firebase/storage";

export default {
  name: "ProfileView",
  setup() {
    const userId = ref(null);
    const route = useRoute();
    const router = useRouter();
    const userRef = [];
    userId.value = route.params.id;

    const image = ref(null);
    const name = ref(null);
    const address = ref(null);

    const loadingState = ref(null);

    onBeforeMount(async () => {
      const docRef = doc(usersCollectionRef, userId.value);
      userRef.value = docRef;
      console.log(userRef);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        image.value = docSnap.data().image;
        name.value = docSnap.data().name;
        address.value = docSnap.data().address;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    });

    const updateHandler = async () => {
      try {
        await setDoc(userRef.value, {
          image: image.value,
          name: name.value,
          address: address.value,
        });
        alert(`Hi, ${name.value}. Your Profile has successfully updated`);
        window.location.assign("/");
      } catch (err) {
        console.log(err.message);
      }
    };

    const imageHandler = (e) => {
      var file = e.target.files[0];
      console.log(file);
      var storage = getStorage();
      var storageRef = imageRef(storage, "users/" + file.name);

      uploadBytes(storageRef, file).then((snapshot) => {
        image.value = snapshot;
      });
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              loadingState.value = "Upload is paused";
              break;
            case "running":
              loadingState.value = "Upload is " + progress + "% done";
              break;
          }
        },
        (error) => {
          loadingState.value = "Upload Failed";
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            image.value = downloadURL;
            console.log("File available at", downloadURL);
          });
        }
      );
    };

    return { name, image, address, loadingState, imageHandler, updateHandler };
  },
};
</script>

<style scoped>
img {
  width: 300px;
}
</style>
