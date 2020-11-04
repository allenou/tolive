<template>
  <div class="theme">
    <header>
      <div class="header-content">
        <NavBar />
      </div>
    </header>
    <main>
      <Page>
        <!-- <template #top>
          <slot name="page-top" />
        </template> -->
        <!-- <template #bottom>
          <slot name="page-bottom" />
        </template> -->
      </Page>
    </main>
    <footer id="footer">
      © Allen AuYeung
    </footer>
  </div>
  <Debug />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Page from "./components/Page.vue";

export default {
  components: {
    NavBar,
    Page,
  },
};
</script>
<style scoped>
#footer{
  padding: 2rem 0;
  text-align:center;
    color: #607d8b;
  border-top: 1px solid var(--border-color);
}
</style>