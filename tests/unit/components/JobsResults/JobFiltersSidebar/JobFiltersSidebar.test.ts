import { shallowMount } from "@vue/test-utils";

import { useUniqueJobTypes, useUniqueOrganizations } from "@/store/composables";
jest.mock("@/store/composables");

const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock;
const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock;

import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";

describe("JobFiltersSidebar", () => {
  it("allows user to filter jobs by job types", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    useUniqueOrganizationsMock.mockReturnValue(new Set(["Google"]));
    const wrapper = shallowMount(JobFiltersSidebar);
    const jobTypesFilter: any = wrapper.findComponent(
      "[data-test='job-types-filter']"
    );
    const { header, uniqueValues, mutation } = jobTypesFilter.props();
    expect(header).toBe("Job Types");
    expect(uniqueValues).toEqual(new Set(["Full-time", "Part-time"]));
    expect(mutation).toBe("ADD_SELECTED_JOB_TYPES");
  });

  it("allows user to filter jobs by organizations", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    useUniqueOrganizationsMock.mockReturnValue(new Set(["Google"]));
    const wrapper = shallowMount(JobFiltersSidebar);
    const jobTypesFilter: any = wrapper.findComponent(
      "[data-test='job-organizations-filter']"
    );
    const { header, uniqueValues, mutation } = jobTypesFilter.props();
    expect(header).toBe("Organizations");
    expect(uniqueValues).toEqual(new Set(["Google"]));
    expect(mutation).toBe("ADD_SELECTED_ORGANIZATIONS");
  });
});
