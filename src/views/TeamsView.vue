<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>
    <template #subtitle>
      <h2 class="w-full my-4 text-base font-light">
        This is a subtitle for named slot in HeaderContainer for the "teams"
        view page, and I don't know what else to write here.
      </h2>
    </template>
  </header-container>
</template>

<script lang="ts">
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "TeamsView",
  components: {
    HeaderContainer,
  },
});
</script>
