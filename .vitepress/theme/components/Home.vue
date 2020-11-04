<template>
  <div class="posts">
    <div class="post-item" v-for="(item, index) in posts">
      <a :href="item.link" class="title">
        {{ item.title }}
      </a>
      <time>{{ item.date }}</time>
      <p><a :href="item.link" class="read-more">Read more...</a></p>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import routers from "../../..//router";
export default {
  setup() {
    const posts = computed(() => {
      return routers
        .filter((item) => {
          item.date = new Date(item.date).toDateString();
          return !item.drafts;
        })
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
    });
    return {
      posts,
    };
  },
};
</script>
<style>
.posts .post-item {
  /* display: flex; */
  /* justify-content: space-between; */
  align-items: center;
  padding-left: 0;
  /* padding: 0.5rem 0; */
}
.posts .title {
  color: var(--title-color);
  font-weight: normal;
}
/* .posts p {
  margin: 0;
} */
.posts time {
  display: block;
  color: #607d8b;
}
.posts .read-more {
  color: #95a5a6;
}
</style>