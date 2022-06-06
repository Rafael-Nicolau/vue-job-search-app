<template>
  <div>
    <job-filters-sidebar-checkbox-group
      :unique-values="uniqueJobTypes"
      :mutation="ADD_SELECTED_JOB_TYPES"
      data-test="job-types-filter"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import JobFiltersSidebarCheckboxGroup from "./JobFiltersSidebarCheckboxGroup.vue";

import { useUniqueJobTypes } from "@/store/composables";

import { ADD_SELECTED_JOB_TYPES } from "@/store/constants";

export default defineComponent({
  name: "JobFiltersSidebarJobTypes",
  components: {
    JobFiltersSidebarCheckboxGroup,
  },

  setup() {
    const uniqueJobTypes = useUniqueJobTypes();

    return { uniqueJobTypes, ADD_SELECTED_JOB_TYPES };
  },
});
</script>
