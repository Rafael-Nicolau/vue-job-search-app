import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing.vue";
import { createJob } from "../../store/utils";
import { Job } from "@/api/types";

describe("JobListing", () => {
  const createConfig = (job: Job) => ({
    props: {
      job: {
        ...job,
      },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("renders job title", () => {
    const job = createJob({ title: "Vue" });

    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("Vue");
  });

  it("renders job organization", () => {
    const job = createJob({ organization: "Yeah Yeah" });

    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("Yeah Yeah");
  });

  it("renders job locations", () => {
    const job = createJob({ locations: ["Berlin", "Köln"] });

    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("Berlin");
    expect(wrapper.text()).toMatch("Köln");
  });

  it("renders job qualifications", () => {
    const job = createJob({ minimumQualifications: ["Google skills"] });

    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("Google skills");
  });

  it("links to individual job page", () => {
    const job = createJob({
      id: 15,
    });

    const wrapper = mount(JobListing, createConfig(job));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const toProp = jobPageLink.props("to");
    expect(toProp).toBe("/jobs/results/15");
  });
});
