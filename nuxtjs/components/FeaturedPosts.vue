<template>
  <div v-editable="blok" class="py-2">
    <h1 class="text-lg">Featured Posts</h1>
    {{ blok.posts }}
    <div v-for="post in blok.posts" :key="post.id">
      {{ post.name }} <img :src="post.content.image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },

  mounted() {
    //console.log(this.blok);
  }
};
</script>
