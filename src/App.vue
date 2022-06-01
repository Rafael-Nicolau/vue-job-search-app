<template>
  <div>
    <main-nav />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import MainNav from "./components/Navigation/MainNav.vue";
export default defineComponent({
  name: "App",
  components: { MainNav },
});
</script>
