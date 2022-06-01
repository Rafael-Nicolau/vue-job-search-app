<template>
  <div class="w-full border-b border-solid border-brand-gray-1">
    <div class="mx-auto my-16 text-center">
      <slot name="title">
        <h1>Sample Title</h1>
      </slot>
      <slot name="subtitle">
        <h3>Sample subtitle</h3>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "HeaderContainer",
});
</script>
