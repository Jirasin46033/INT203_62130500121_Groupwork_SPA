<template>
  <div class="bg-welcome">
    <div>
      <div class="content-box">
        <h3>Welcome!!!</h3>
        <img src="../assets/SIT25Group.jpg" />
        <p>This is My friendship.</p>
        <span>By Peck Jirasin</span>
        <router-link to="/writefriendship"
          ><button>Write your friendship</button></router-link
        >
        <router-link to="list"
          ><button>Read another friendship</button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg-welcome {
  @apply min-h-screen min-w-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 flex items-center justify-center;
}

.content-box {
  @apply flex flex-col max-w-md bg-white px-8 py-6 rounded-xl space-y-5 items-center;
}

h3 {
  @apply font-serif font-bold text-gray-900 text-xl;
}

img {
  @apply w-full rounded-md;
}

p,
span {
  @apply text-center leading-relaxed;
}

button {
  @apply px-24 py-4 bg-gray-900 rounded-md text-white text-sm focus:border-transparent;
}
</style>