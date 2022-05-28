import { mount } from "@vue/test-utils";
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

describe("HeaderContainer", () => {
  it("allows parent component to provide title content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        title: "<h1>title</h1>",
      },
    });
    expect(wrapper.text()).toMatch("title");
  });

  it("allows parent component to provide subtitle content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        subtitle: "<h2>subtitle</h2>",
      },
    });
    expect(wrapper.text()).toMatch("subtitle");
  });
});
