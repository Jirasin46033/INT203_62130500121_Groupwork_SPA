<template>
  <div class="bg-about">
    <div>
      <div class="content-box">
        <h3>About</h3>
        <img src="../assets/Jirasin.jpg" />
        <p>Hi My name is Jirasin Phaobthong</p>
        <span>Nice to meet you!!</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.bg-about {
  @apply min-h-screen min-w-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 flex items-center justify-center;
}

.content-box {
  @apply flex flex-col max-w-md bg-white px-8 py-6 rounded-xl space-y-5 items-center;
}

h3 {
  @apply font-serif font-bold text-gray-900 text-xl;
}
</style>
