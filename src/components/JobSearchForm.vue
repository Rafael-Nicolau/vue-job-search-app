<template>
  <form
    action=""
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <input
          v-model="role"
          type="text"
          placeholder="Vue Frontend Developer"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>

      <span
        class="flex items-center h-full px-3 border-l border-r border-brand-gray-3 bg-brand-gray-2"
        >in</span
      >

      <div class="relative flex items center flex-1 h-full pl-3">
        <label class="absolute left-0 -top-10">Location</label>
        <input
          v-model="location"
          type="text"
          placeholder="Berlin"
          class="w-full text-lg font-normal focus:outline-none"
        />
        <!--           @input="location = $event.target.value"
 you can use @input @click etc with the syntax above, MUST use $ (dolar sign) to access the DOM proprieties, then event.target.value to update the data below -->
      </div>
    </div>

    <action-button text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from "./ActionButton.vue";
export default {
  name: "JobSearchForm",
  components: { ActionButton },
  data() {
    return {
      role: "",
      location: "",
    };
  },
  // Instead of useing method or inline @input biding you can use v-model="" with the data you want to update
  //You can make a method to update the state of the fields "role and location" or above you can pass the method directly inside @input
  // methods: {
  //   updateRole($event) {
  //     this.role = $event.target.value;
  //   },
  //   // UpdateLocation is being used an inline V-bind to update data and location variable
  //   // updateLocation(e) {
  //   //   this.location = e.target.value;
  //   // },
  // },
};
</script>
