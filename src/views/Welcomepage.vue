<template>
  <div class="bg-welcome">
    <div>
      <div class="content-box">
        <h3>Welcome!!!</h3>
        <img src="../assets/SIT25Group.jpg" />
        <p class="text-center leading-relaxed">This is My friendship.</p>
        <span class="text-center">By Peck Jirasin</span>
        <button
          class="px-24 py-4 bg-gray-900 rounded-md text-white text-sm focus:border-transparent"
        >
          Write your friendship
        </button>
        <button
          class="px-24 py-4 bg-gray-900 rounded-md text-white text-sm focus:border-transparent"
        >
          Read another friendship
        </button>
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

h3{
    @apply font-serif font-bold text-gray-900 text-xl
}

img{
 @apply w-full rounded-md
}
</style>