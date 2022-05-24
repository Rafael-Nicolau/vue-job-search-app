import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import MainNav from "@/components/Navigation/MainNav.vue";

describe("MainNav", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("Display company name", () => {
    const wrapper = shallowMount(MainNav, createConfig());
    expect(wrapper.text()).toMatch("Nico Careers");
  });

  it("Displays menu items for navigation", () => {
    const wrapper = shallowMount(MainNav, createConfig());
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
      const wrapper = shallowMount(MainNav, createConfig());
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("when user is logged in", () => {
    it("displays user profile picture", async () => {
      const wrapper = shallowMount(MainNav, createConfig());
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);
      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");
      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });

    it("Displays sub-navigation menu with additional information", async () => {
      const wrapper = shallowMount(MainNav, createConfig());
      let subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(false);
      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");
      subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
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
