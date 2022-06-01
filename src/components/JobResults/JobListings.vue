<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
        data-test="job-listing"
      />
    </ol>
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>
        <div class="flex item-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="previous-page-link"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="next-page-link"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "@vue/runtime-core";

import useCurrentPage from "@/composables/useCurrentPage";
import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";
import { useFetchJobDispatch, useFilteredJobs } from "@/store/composables";
import JobListing from "./JobListing.vue";

export default defineComponent({
  name: "JobListings",
  components: { JobListing },

  setup() {
    onMounted(useFetchJobDispatch);

    const filteredJobs = useFilteredJobs();

    const currentPage = useCurrentPage();

    const maxPage = computed(() => Math.ceil(filteredJobs.value.length / 10));

    const { previousPage, nextPage } = usePreviousAndNextPages(
      currentPage,
      maxPage
    );

    const displayedJobs = computed(() => {
      const pageNumber = currentPage.value;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return filteredJobs.value.slice(firstJobIndex, lastJobIndex);
    });

    return {
      currentPage,
      previousPage,
      nextPage,
      displayedJobs,
    };
  },

  //------------->>>>>> Code below is just to remember optional API
  // data() {
  //   return {
  //     //jobs: [],
  //     firstPage: 1,
  //   };
  // },

  // computed: {
  //   ...mapGetters([FILTERED_JOBS]),
  //   currentPage() {
  //     const pageString = this.$route.query.page || "1";
  //     return Number.parseInt(pageString);
  //   },

  //   previousPage() {
  //     const previousPage = this.currentPage - 1;
  //     return previousPage >= this.firstPage ? previousPage : undefined;
  //   },

  //   nextPage() {
  //     const nextPage = this.currentPage + 1;
  //     const maxPage = Math.ceil(this.FILTERED_JOBS.length / 10);
  //     return nextPage <= maxPage ? nextPage : undefined;
  //   },

  //   displayedJobs() {
  //     const pageNumber = this.currentPage;
  //     const firstJobIndex = (pageNumber - 1) * 10;
  //     const lastJobIndex = pageNumber * 10;
  //     return this.FILTERED_JOBS.slice(firstJobIndex, lastJobIndex);
  //   },
  //   //...mapState(["jobs"]), ----> need to import mapState to use
  // },

  // async mounted() {
  //   this.FETCH_JOBS();
  //   //this.$store.dispatch(FETCH_JOBS);
  //   // const baseUrl = process.env.VUE_APP_API_URL;
  //   // const response = await axios.get(`${baseUrl}/jobs`);
  //   // this.jobs = response.data;
  // },
  // methods: {
  //   ...mapActions([FETCH_JOBS]),
  // },
});
</script>
