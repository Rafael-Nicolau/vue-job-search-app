<template>
  <div>Job page for {{ currentJobId }}</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "JobView",
  setup() {
    const route = useRoute();

    const currentJobId = route.params.id;

    return { currentJobId };
  },

  //   computed: {
  //     currentJobId() {
  //       return this.$route.params.id;
  //     },
  //   },
});
</script>
