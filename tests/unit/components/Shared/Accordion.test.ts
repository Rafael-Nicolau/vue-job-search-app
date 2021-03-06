import { mount } from "@vue/test-utils";

import Accordion from "@/components/Shared/Accordion.vue";

describe("Accordion", () => {
  const createConfig = (config = {}) => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    props: {
      header: "test",
    },
    slots: {
      default: "<h3>test html</h3>",
    },
    ...config,
  });

  it("renders child", async () => {
    const slots = {
      default: "<h3>test html</h3>",
    };
    const config = { slots };
    const wrapper = mount(Accordion, createConfig(config));

    expect(wrapper.text()).not.toMatch("test html");
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    expect(wrapper.text()).toMatch("test html");
  });

  describe("When we do not provide custom child content", () => {
    it("renders default content", async () => {
      const wrapper = mount(Accordion, createConfig({ slots: {} }));
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      expect(wrapper.text()).toMatch(
        "Hmm, it seems no populate was made here."
      );
    });
  });
});
