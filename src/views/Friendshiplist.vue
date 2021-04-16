<template>
  <div class="bg">
    <friend-ship-box :friendship="friendships" @delete="deleteFriendShip($event)"></friend-ship-box>
  </div>
</template>

<script>
const axios = require("axios");
import FriendShipBox from '@/components/Friendshipbox.vue'
export default {
  created() {
    this.fetchdata();
  },

  components:{FriendShipBox},

  data() {
    return {
      friendships: [],
      url: "http://localhost:3000/friendships",
    };
  },

  methods: {
    fetchdata() {
      axios
        .get(this.url)
        .then((response) => {
          this.friendships = response.data;
          console.log(this.friendships);
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    deleteFriendShip(id) {
      axios
        .delete(this.url + "/" + id)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          this.friendships = this.friendships.filter(
            (friendship) => friendship.id !== id
          );
        });
    },
  },
};
</script>

<style scoped>
.bg {
  @apply min-h-screen min-w-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 flex items-center justify-center;
}


</style>