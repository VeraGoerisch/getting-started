<template>
  <div class="w-10/12 m-auto">
    <Post :blok="story.content" />
  </div>
</template>

<script>
import Post from "~/components/Post.vue";
export default {
  components: {
    Post
  },
  asyncData(context) {
    console.log("here");
    // Load the JSON from the API
    const version =
      context.query._storyblok || context.isDev ? "draft" : "published";
    return context.app.$storyapi
      .get(`cdn/stories/posts/${context.params.slug}`, {
        version
      })
      .then(res => {
        return res.data;
      })
      .catch(res => {
        if (!res.response) {
          console.error(res);
          context.error({
            statusCode: 404,
            message: "Failed to receive content form api"
          });
        } else {
          console.error(res.response.data);
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          });
        }
      });
  },
  data() {
    return {
      story: { content: {} }
    };
  },
  mounted() {
    this.$storybridge(() => {
      // eslint-disable-next-line
      const storyblokInstance = new StoryblokBridge();
      // Use the input event for instant update of content
      storyblokInstance.on("input", event => {
        // console.log(this.story.content)
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      });
      // Use the bridge to listen the events
      storyblokInstance.on(["published", "change"], event => {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        });
      });
    });
  }
};
</script>
