import state from "@/store/state";

describe("state", () => {
  it("keeps track of whether user is logged in", () => {
    const startingState = state();
    expect(startingState.isLoggedIn).toBe(false);
  });

  it("store jobs listing", () => {
    const startingState = state();
    expect(startingState.jobs).toEqual([]);
  });

  it("stores all degrees that jobs may require", () => {
    const startingState = state();
    expect(startingState.degrees).toEqual([]);
  });

  it("stores users search term for skill and qualifications", () => {
    const startingState = state();
    expect(startingState.skillsSearchTerm).toBe("");
  });

  it("stores organizations that the user would like to filter jobs by", () => {
    const startingState = state();
    expect(startingState.selectedOrganizations).toEqual([]);
  });

  it("stores job types the user would like to filter jobs by", () => {
    const startingState = state();
    expect(startingState.selectedJobTypes).toEqual([]);
  });

  it("stores degrees that the user would like to filter jobs by", () => {
    const startingState = state();
    expect(startingState.selectedDegrees).toEqual([]);
  });
});
