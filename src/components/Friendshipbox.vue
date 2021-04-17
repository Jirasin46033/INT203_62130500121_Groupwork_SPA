<template>
    <div class="flex-box">
      <div
        class="content"
        v-for="f in friendship"
        :key="f.id"
      >
        <div class="overflow-hidden shadow-md mb-10">
          <!-- card header -->
          <div
            class="card-header"
          >
            {{ f.name }}
          </div>

          <!-- card body -->
          <div class="card-body">
            <!-- content goes here -->
            {{ f.message }}
          </div>

          <!-- card footer -->
          <div class="card-footer">
            <!-- button link -->
            <router-link :to="{ name: 'Edit', params: { slug: f.id }}"><button class="btn-edit">Edit</button></router-link>
            <button class="btn-delete" @click="$emit('delete',f.id)">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props:['friendship'],

    emits:['delete','edit'],

    methods: {
        // delete(id){
        //     this.$emit('deletef',id)
        // }
    }
}
</script>

<style scoped>
.btn-edit {
  @apply mt-4  mx-2 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500;
}

.btn-delete {
  @apply mt-4 px-4 py-2 bg-red-600 text-white text-sm uppercase font-medium rounded hover:bg-red-500 focus:outline-none focus:bg-red-500;
}

.card-footer{
  @apply p-6 bg-white border-gray-200 text-right
}

.card-body{
  @apply p-6 bg-white border-b border-gray-200
}

.card-header{
  @apply px-6 py-4 bg-white border-b border-gray-200 font-bold uppercase
}

.flex-box{
  @apply flex flex-row flex-wrap justify-start items-stretch box-border
}

.content{
  @apply max-w-2xl mx-auto sm:px-6 lg:px-8
}
</style>