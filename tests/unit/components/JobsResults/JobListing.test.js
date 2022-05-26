import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Vue",
    organization: "Yeah Yeah",
    locations: "Berlin",
    minimumQualifications: "Be resilient",
    ...jobProps,
  });

  const createConfig = (jobProps) => ({
    props: {
      job: {
        ...jobProps,
      },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("renders job title", () => {
    const jobProps = createJobProps({ title: "Vue" });

    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Vue");
  });

  it("renders job organization", () => {
    const jobProps = createJobProps({ organization: "Yeah Yeah" });

    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Yeah Yeah");
  });

  it("renders job locations", () => {
    const jobProps = createJobProps({ locations: ["Berlin", "Köln"] });

    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Berlin");
    expect(wrapper.text()).toMatch("Köln");
  });

  it("renders job qualifications", () => {
    const jobProps = createJobProps({ minimumQualifications: "Google skills" });

    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Google skills");
  });

  it("links to individual job page", () => {
    const jobProps = createJobProps({
      id: 15,
    });

    const wrapper = mount(JobListing, createConfig(jobProps));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const toProp = jobPageLink.props("to");
    expect(toProp).toBe("/jobs/results/15");
  });
});
