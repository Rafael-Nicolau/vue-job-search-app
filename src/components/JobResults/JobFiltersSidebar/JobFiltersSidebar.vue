<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <job-filters-sidebar-prompt />

      <accordion header="Skills and Qualifications">
        <job-filters-sidebar-skills />
      </accordion>

      <accordion header="Degrees">
        <job-filters-sidebar-degrees />
      </accordion>

      <accordion header="Job Types">
        <job-filters-sidebar-job-types />
      </accordion>

      <accordion header="Organizations">
        <job-filters-sidebar-organization />
      </accordion>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";

import Accordion from "@/components/Shared/Accordion.vue";

import JobFiltersSidebarDegrees from "./JobFiltersSidebarDegrees.vue";
import JobFiltersSidebarJobTypes from "./JobFiltersSidebarJobTypes.vue";
import JobFiltersSidebarOrganization from "./JobFiltersSidebarOrganization.vue";
import JobFiltersSidebarPrompt from "./JobFiltersSidebarPrompt.vue";
import JobFiltersSidebarSkills from "./JobFiltersSidebarSkills.vue";
import { useStore } from "vuex";
import { key } from "@/store";
import { UPDATE_SKILLS_SEARCH_TERM } from "@/store/constants";

export default defineComponent({
  name: "JobFiltersSidebar",
  components: {
    Accordion,
    JobFiltersSidebarDegrees,
    JobFiltersSidebarJobTypes,
    JobFiltersSidebarOrganization,
    JobFiltersSidebarPrompt,
    JobFiltersSidebarSkills,
  },

  setup() {
    const parseSkillsSearchTerm = () => {
      const route = useRoute();
      const store = useStore(key);
      const role = route.query.role || "";
      store.commit(UPDATE_SKILLS_SEARCH_TERM, role);
    };
    onMounted(parseSkillsSearchTerm);
  },
});
</script>
