import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("Display company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Nico Careers");
  });

  it("Displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
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
});

// THIS IS FOR WHEN YOU NEED TO Set "props" inside component
// describe("MainNav", () => {
//   it("Display company name", async () => {
//     const wrapper = mount(MainNav);
//     await wrapper.setData({
//       company: "XYZ",
//     });
//     expect(wrapper.text()).toMatch("XYZ");
//   });
// });
