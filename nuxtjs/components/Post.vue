<template>
  <div v-editable="blok" class="py-2">
    <h1 class="text-lg">blog post</h1>
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
    console.log(this.blok);
  }
};
</script>
