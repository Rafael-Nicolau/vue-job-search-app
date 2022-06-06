import { shallowMount } from "@vue/test-utils";
jest.mock("vuex");

import { useUniqueDegrees } from "@/store/composables";
jest.mock("@/store/composables");

const useUniqueDegreesMock = useUniqueDegrees as jest.Mock;

import JobFiltersSidebarDegrees from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarDegrees.vue";

describe("first", () => {
  it("allows user to filter jobs by degrees", () => {
    useUniqueDegreesMock.mockReturnValue(["Associate", "Bachelor's"]);
    const wrapper = shallowMount(JobFiltersSidebarDegrees);
    const degreesFilter: any = wrapper.findComponent(
      "[data-test='degrees-filter']"
    );
    const { uniqueValues, mutation } = degreesFilter.props();
    expect(uniqueValues).toEqual(["Associate", "Bachelor's"]);
    expect(mutation).toBe("ADD_SELECTED_DEGREES");
  });
});
