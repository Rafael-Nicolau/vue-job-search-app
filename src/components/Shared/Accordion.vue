<template>
  <div class="py-5 border-b border-solid border-brand-gray-2">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      data-test="clickable-area"
      @click="open"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>

    <div v-if="isOpen" class="w-full mt-5">
      <slot>
        <p>Hmm, it seems no populate was made here.</p>
      </slot>
    </div>
  </div>
</template>

<script>
//using setup from composite API of vue3
import { computed, ref } from "vue";
export default {
  name: "Accordion",

  props: {
    header: {
      type: String,
      required: true,
      default: "Error",
    },
  },

  setup() {
    const isOpen = ref(false);

    const caretIcon = computed(() =>
      isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"]
    );

    const open = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      caretIcon,
      open,
    };
  },

  // data() {
  //   return {
  //     isOpen: false,
  //   };
  // },

  // computed: {
  //   caretIcon() {
  //     return this.isOpen ? ["fas", "angle-up"] : ["fas", "angle-down"];
  //   },
  // },

  // methods: {
  //   open() {
  //     this.isOpen = !this.isOpen;
  //   },
  // },
};
</script>
