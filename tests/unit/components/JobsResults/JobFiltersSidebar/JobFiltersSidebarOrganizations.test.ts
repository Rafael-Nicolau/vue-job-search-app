import { shallowMount } from "@vue/test-utils";
jest.mock("vuex");

import { useUniqueOrganizations } from "@/store/composables";
jest.mock("@/store/composables");

const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock;

import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganization.vue";

describe("JobFiltersSidebarOrganizations", () => {
  it("allows user to filter jobs by organizations", () => {
    useUniqueOrganizationsMock.mockReturnValue(new Set(["Google"]));
    const wrapper = shallowMount(JobFiltersSidebarOrganizations);
    const organizationsFilter: any = wrapper.findComponent(
      "[data-test='job-organizations-filter']"
    );
    const { uniqueValues, mutation } = organizationsFilter.props();
    expect(uniqueValues).toEqual(new Set(["Google"]));
    expect(mutation).toBe("ADD_SELECTED_ORGANIZATIONS");
  });
});
