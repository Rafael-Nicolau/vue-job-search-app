<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full text-xl font-bold"
          >Nico Careers</router-link
        >

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <router-link
                :to="menuItem.url"
                class="flex items-center h-full py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image
            v-if="isLoggedIn"
            data-test="profile-image"
            @click="LOGOUT_USER()"
          />
          <action-button
            v-else
            text="Sign In"
            type="primary"
            data-test="login-button"
            @click="LOGIN_USER()"
          />
        </div>
      </div>
      <subnav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>

<script lang="ts">
import { mapMutations, mapState } from "vuex";

import ActionButton from "../Shared/ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";
import Subnav from "./Subnav.vue";

import { LOGIN_USER, LOGOUT_USER } from "@/store/constants";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "MainNav",
  components: { ActionButton, ProfileImage, Subnav },
  data() {
    return {
      menuItems: [
        { text: "Teams", url: "/teams" },
        { text: "Locations", url: "/" },
        { text: "Life at Nico's", url: "/" },
        { text: "How we hire", url: "/" },
        { text: "Students", url: "/" },
        { text: "Jobs", url: "/jobs/results" },
      ],
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
    ...mapState(["isLoggedIn"]),
    //Below other ways to do the same thing:
    // ...mapState({
    //   isLoggedIn: "isLoggedIn",
    // }),
    // ...mapState({
    //   isLoggedIn: (state) => state.isLoggedIn,
    // }),
    // isLoggedIn() {
    //   return this.$store.state.isLoggedIn;
    // },
  },
  methods: {
    ...mapMutations([LOGIN_USER, LOGOUT_USER]),
    //Below other ways to do the same thing:
    // LOGIN_USER() {
    //   this.$store.commit(LOGIN_USER);
    // },
    // LOGOUT_USER() {
    //   this.$store.commit(LOGOUT_USER);
    // },
  },
});
</script>
