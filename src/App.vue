<template>
  <div id="app">
    <div class="first-layer">
      <aside><Aside></Aside></aside>
      <main><router-view /></main>
    </div>
  </div>
</template>

<script>
import Aside from "./components/Aside.vue";
export default { components: { Aside } };
</script>