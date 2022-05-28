import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { createStore } from "vuex";

import MainNav from "@/components/Navigation/MainNav.vue";

describe("MainNav", () => {
  const createConfig = ($store) => ({
    global: {
      mocks: {
        $store,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("Display company name", () => {
    const $store = {
      state: {
        isLoggedIn: false,
      },
    };
    const wrapper = shallowMount(MainNav, createConfig($store));
    expect(wrapper.text()).toMatch("Nico Careers");
  });

  it("Displays menu items for navigation", () => {
    const $store = {
      state: {
        isLoggedIn: false,
      },
    };
    const wrapper = shallowMount(MainNav, createConfig($store));
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Nico's",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });

  describe("when user is logged out", () => {
    it("prompts user to sign in", () => {
      const $store = {
        state: {
          isLoggedIn: false,
        },
      };
      const wrapper = shallowMount(MainNav, createConfig($store));
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("when user is logged in", () => {
    it("displays user profile picture", () => {
      const store = createStore({
        state() {
          return {
            isLoggedIn: true,
          };
        },
      });
      const wrapper = shallowMount(MainNav, createConfig(store));
      const profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });

    it("Displays sub-navigation menu with additional information", () => {
      const store = createStore({
        state() {
          return {
            isLoggedIn: true,
          };
        },
      });
      const wrapper = shallowMount(MainNav, createConfig(store));
      const subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });

  describe("when user login and logout", () => {
    it("issues call to Vuex to login user", async () => {
      const store = createStore();
      const commit = jest.fn();
      store.commit = commit;
      const wrapper = shallowMount(MainNav, createConfig(store));
      const loginButton = wrapper.find("[data-test='login-button']");

      await loginButton.trigger("click");

      expect(commit).toHaveBeenLastCalledWith("LOGIN_USER");
    });

    it("issues a call to Vuex to logout user", async () => {
      const store = createStore({
        state() {
          return {
            isLoggedIn: true,
          };
        },
      });
      const commit = jest.fn();
      store.commit = commit;
      const wrapper = shallowMount(MainNav, createConfig(store));
      const profileImage = wrapper.find("[data-test='profile-image']");

      await profileImage.trigger("click");

      expect(commit).toHaveBeenCalledWith("LOGOUT_USER");
    });
  });
});

// THIS IS FOR WHEN YOU NEED TO Set "props" inside component
// describe("MainNav", () => {
//   it("Display company name", async () => {
//     const wrapper = shallowMount(MainNav);
//     await wrapper.setData({
//       company: "XYZ",
//     });
//     expect(wrapper.text()).toMatch("XYZ");
//   });
// });
