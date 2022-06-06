<template>
  <div>
    <job-filters-sidebar-checkbox-group
      :unique-values="uniqueDegrees"
      :mutation="ADD_SELECTED_DEGREES"
      data-test="degrees-filter"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JobFiltersSidebarCheckboxGroup from "./JobFiltersSidebarCheckboxGroup.vue";

import { ADD_SELECTED_DEGREES } from "@/store/constants";
import { useUniqueDegrees } from "@/store/composables";

export default defineComponent({
  name: "JobFilterSidebarDegrees",
  components: {
    JobFiltersSidebarCheckboxGroup,
  },

  setup() {
    const uniqueDegrees = useUniqueDegrees();

    return { uniqueDegrees, ADD_SELECTED_DEGREES };
  },
});
</script>
