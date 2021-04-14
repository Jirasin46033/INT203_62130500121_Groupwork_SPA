<template>
  <div class="home" style="height: 38rem">
    <div class="all">
      <div class="header">My Friendships</div>
      <router-link to="/welcome"> <button class="btn">Click here</button></router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>

<style scoped>
.header {
  @apply text-white text-2xl font-semibold uppercase;
}

.btn {
  @apply mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500;
}

.home {
  @apply w-full bg-cover bg-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500;
}

.all {
  @apply pt-60;
}
</style>