<template>
  <div class="bg">
      <div class="flex flex-row flex-wrap justify-start items-stretch box-border ">
<div
      class="max-w-2xl mx-auto sm:px-6 lg:px-8"
      v-for="f in friendships"
      :key="f.id"
    >
      <div class="overflow-hidden shadow-md mb-10">
        <!-- card header -->
        <div
          class="px-6 py-4 bg-white border-b border-gray-200 font-bold uppercase"
        >
          {{ f.name }}
        </div>

        <!-- card body -->
        <div class="p-6 bg-white border-b border-gray-200">
          <!-- content goes here -->
          {{ f.message }}
        </div>

        <!-- card footer -->
        <div class="p-6 bg-white border-gray-200 text-right">
          <!-- button link -->
          <button class="btn-edit">Edit</button>
          <button class="btn-delete">Delete</button>
        </div>
      </div>
    </div>
      </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      friendships: [
        { id: 1, name: "JJ", message: "jj is the best friend in my world <3" },
        { id: 2, name: "Petch", message: "Happy birthday Petch" },
        { id: 3, name: "JJ", message: "jj is the best friend in my world <3" },
        { id: 4, name: "JJ", message: "jj is the best friend in my world <3" },
        { id: 5, name: "JJ", message: "jj is the best friend in my world <3" },
        { id: 6, name: "JJ", message: "jj is the best friend in my world <3" },
        { id: 7, name: "Petch", message: "Happy birthday Petch" },
        { id: 8, name: "Petch", message: "Happy birthday Petch" },
        { id: 9, name: "Petch", message: "Happy birthday Petch" },
      ],
    };
  },
};
</script>

<style scoped>
.bg {
  @apply min-h-screen min-w-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 flex items-center justify-center;
}

.btn-edit {
  @apply mt-4  mx-2 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500;
}

.btn-delete {
  @apply mt-4 px-4 py-2 bg-red-600 text-white text-sm uppercase font-medium rounded hover:bg-red-500 focus:outline-none focus:bg-red-500;
}
</style>