<template>
  <div class="bg-edit-page">
    <!-- <div class="content-box">
        <h1>edit Friendship</h1>
    </div> -->
    <form class="edit-form">
      <h1>Edit Friendship</h1>
      <div>
        <div class="edit-name">
          <label for="name">Name</label>
          <input
            v-model="newfriendship.name"
            type="text"
            id="name"
            autocomplete="off"
          />
        </div>
      </div>
      <div class="edit-message">
        <label for="message">Message</label>
        <textarea
          v-model="newfriendship.message"
          rows="4"
          id="message"
        ></textarea>
      </div>
      <router-link to="/list"
        ><button class="btn" @click="update">Submit</button></router-link
      >
    </form>
  </div>
</template>

<script>
// import ReadFriendShip from "@/components/ReadFriendship.vue";
const axios = require("axios");
export default {
  //   components: { ReadFriendShip },

  created() {
    this.fetchdata();
  },

  props: {
    slug: {
      require: true,
      type: String,
    },
  },

  data() {
    return {
      friendship: [],
      newfriendship: {
        name: "",
        message: "",
        id: "",
      },
      url: "http://localhost:3000/friendships/",
    };
  },

  methods: {
    fetchdata() {
      axios
        .get(this.url + this.$route.params.slug)
        .then((response) => {
          this.friendship = response.data;
          console.log(response.data);
          return response.data;
        })
        .then(() => {
          this.newfriendship.name = this.friendship.name;
          this.newfriendship.message = this.friendship.message;
          console.log(this.newfriendship.name);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    update() {
      let updated = {
        name: this.newfriendship.name,
        message: this.newfriendship.message,
      };
      axios
        .put(this.url + this.$route.params.slug, updated)
        .then((response) => {
          return response.data;
        })
        .then(() => {
          this.friendship = updated;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.bg-edit-page {
  @apply min-h-screen min-w-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 flex items-center justify-center;
}

.content-box {
  @apply flex flex-col max-w-md bg-white px-56 py-56 rounded-xl space-y-5 items-center;
}

.btn {
  @apply mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500;
}

.edit-form {
  @apply w-full md:w-1/2 border p-6 bg-white;
}

h1 {
  @apply text-2xl pb-3 font-semibold;
}

.edit-name {
  @apply flex flex-col mb-3;
}

.edit-message {
  @apply flex flex-col mb-3;
}

#name {
  @apply px-3 py-2 text-white bg-gray-800 border focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-white;
}

#message {
  @apply px-3 py-2 text-white bg-gray-800 border focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-white;
}
</style>