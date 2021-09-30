import Vue from "vue";
import Page from "~/components/Page.vue";
import Teaser from "~/components/Teaser.vue";
import Grid from "~/components/Grid.vue";
import Feature from "~/components/Feature.vue";
import PostLink from "~/components/PostLink.vue";
import FeaturedPosts from "~/components/FeaturedPosts.vue";
import Post from "~/components/Post.vue";

Vue.component("page", Page);
Vue.component("teaser", Teaser);
Vue.component("grid", Grid);
Vue.component("feature", Feature);
Vue.component("post-link", PostLink);
Vue.component("featured_posts", FeaturedPosts);
Vue.component("post", Post);
