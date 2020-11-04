<template>
  <div class="content">
    <slot name="top" />
    <Home v-if="pageData.frontmatter.home" />
    <div v-else>
      <span class="title">{{ pageData.title }}</span>
      <time>{{ publishDate }}</time>
      <Content />
    </div>
    <!-- <NextAndPrevLinks /> -->
    <PageEdit />
    <!-- <slot name="bottom" /> -->
  </div>
</template>

<script>
import { computed } from "vue";
import { usePageData } from "vitepress";
import NextAndPrevLinks from "./NextAndPrevLinks.vue";
import PageEdit from "./PageEdit.vue";
import Home from "./Home.vue";
export default {
  components: { NextAndPrevLinks, PageEdit, Home },
  setup() {
    const pageData = usePageData();
    const publishDate = computed(() =>
      new Date(pageData.value.frontmatter.date).toDateString()
    );
    return {
      pageData,
      publishDate,
    };
  },
};
</script>

<style>
.content {
  margin: 0 auto;
  padding: 0.025rem 2.5rem 2rem;
  /* if this is moved to a variable, add it to BuySellAds.vue */
  max-width: 50rem;
  background-color: var(--background-color);
}

.content a {
  color: var(--accent-color);
}

.content a:hover {
  text-decoration: underline;
}

.content img {
  max-width: 100%;
}
.content .title {
  margin-top: 16px;
  margin-bottom: 0;
  color: var(--title-color);
  font-weight: normal;
  border-bottom: none !important;
  font-size: 1.65rem;
}
.content p code {
  background-color: var(--tip-background-color);
}
.content time {
  display: block;
  color: #607d8b;
}
/*
.content div > h1:first-child, .content div > h2:first-child {
  margin-top: 0;
} */
</style>
