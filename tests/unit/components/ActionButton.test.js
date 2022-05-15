import { mount } from "@vue/test-utils";
import ActionButton from "@/components/ActionButton";

describe("ActionButton", () => {
  it("Render some text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "I'm a button inside a test",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("I'm a button inside a test");
  });
  it("Apply proper style inside button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "I'm a button inside a test",
        type: "primary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
