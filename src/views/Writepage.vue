<template>
  <div class="bg-write-page">
    <!-- <div class="content-box">
        <h1>Write Friendship</h1>
    </div> -->

    <form class="write-form">
      <h1>Write Friendship</h1>
      <div>
        <div class="write-name">
          <label for="name">Name</label>
          <input v-model="name" type="text" id="name" autocomplete="off" />
        </div>
      </div>
      <div class="write-message">
        <label for="message">Message</label>
        <textarea v-model="message" rows="4" id="message"></textarea>
      </div>
      <button class="btn" @click.prevent="submitfriendship">Submit</button>
    </form>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  
  data(){
    return{
      name: '',
      message: '',
      url:'http://localhost:3000/friendships'
    }
  },

  methods:{
    submitfriendship(){
      axios.post(this.url,{
        name: this.name,
        message: this.message
      }).then((response) => {
        return response.data
      }).then(() => {
        this.name = ''
        this.message= ''
        setTimeout(() => {
          this.$router.push('List')
        }, 1000);
      }).catch((error) => {
        console.log(error)
      })
    }
  }
};
</script>

<style scoped>
.bg-write-page {
  @apply min-h-screen min-w-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 flex items-center justify-center;
}

.content-box {
  @apply flex flex-col max-w-md bg-white px-56 py-56 rounded-xl space-y-5 items-center;
}

.btn {
  @apply mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500;
}

.write-form {
  @apply w-full md:w-1/2 border p-6 bg-white;
}

h1 {
  @apply text-2xl pb-3 font-semibold;
}

.write-name {
  @apply flex flex-col mb-3;
}

.write-message {
  @apply flex flex-col mb-3;
}

#name {
  @apply px-3 py-2 text-white bg-gray-800 border focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-white;
}

#message {
  @apply px-3 py-2 text-white bg-gray-800 border focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-white;
}
</style>