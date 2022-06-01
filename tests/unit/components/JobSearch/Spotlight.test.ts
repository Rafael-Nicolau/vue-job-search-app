import { mount, flushPromises } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios");

import Spotlight from "@/components/JobSearch/Spotlight.vue";

const axiosGetMock = axios.get as jest.Mock;

describe("Spotlight", () => {
  const mockSpotlightResponse = (data = {}) => {
    axiosGetMock.mockResolvedValue({
      data: [
        {
          img: "img",
          title: "title",
          description: "description",
          ...data,
        },
      ],
    });
  };

  it("provides image attribute to parent component", async () => {
    const data = { img: "img" };
    mockSpotlightResponse({ data });
    const wrapper = mount(Spotlight, {
      slots: {
        default: `<template #default="slotProps">
          <h1>{{ slotProps.img }}</h1>
        </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("img");
  });

  it("provides title attribute to parent component", async () => {
    mockSpotlightResponse();
    const wrapper = mount(Spotlight, {
      slots: {
        default: `<template #default="slotProps">
          <h1>{{ slotProps.title }}</h1>
        </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("title");
  });

  it("provides image attribute to parent component", async () => {
    mockSpotlightResponse();
    const wrapper = mount(Spotlight, {
      slots: {
        default: `<template #default="slotProps">
          <h1>{{ slotProps.description }}</h1>
        </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("description");
  });
});
