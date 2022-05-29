import getters from "@/store/getters";

describe("getters", () => {
  describe("UNIQUE_ORGANIZATIONS", () => {
    it("finds unique organizations from list of jobs", () => {
      const state = {
        jobs: [
          { organization: "Google" },
          { organization: "Amazon" },
          { organization: "Google" },
        ],
      };
      const result = getters.UNIQUE_ORGANIZATIONS(state);
      expect(result).toEqual(new Set(["Google", "Amazon"]));
    });
  });

  describe("FILTERED_JOBS_BY_ORGANIZATIONS", () => {
    it("identifies jobs that are associated with the given organizations", () => {
      const state = {
        jobs: [
          { organization: "org1" },
          { organization: "org2" },
          { organization: "org3" },
          { organization: "org4" },
        ],
        selectedOrganizations: ["org1", "org2"],
      };

      const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state);
      expect(filteredJobs).toEqual([
        { organization: "org1" },
        { organization: "org2" },
      ]);
    });

    describe("when the user has not selected any organizations", () => {
      it("return all jobs", () => {
        const state = {
          jobs: [
            { organization: "org1" },
            { organization: "org2" },
            { organization: "org3" },
            { organization: "org4" },
          ],
          selectedOrganizations: [],
        };

        const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state);
        expect(filteredJobs).toEqual([
          { organization: "org1" },
          { organization: "org2" },
          { organization: "org3" },
          { organization: "org4" },
        ]);
      });
    });
  });
});
