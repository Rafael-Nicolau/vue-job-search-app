import { mount } from "@vue/test-utils";

import TextInput from "@/components/Shared/TextInput.vue";

describe("TextInput", () => {
  it("communicates that user has entered character", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
    input.setValue("T");
    input.setValue("Te");
    input.setValue("Tes");
    input.setValue("Test");
    const messages = wrapper.emitted()["update:modelValue"];
    expect(messages).toEqual([["T"], ["Te"], ["Tes"], ["Test"]]);
  });
});
