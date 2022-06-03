import { Degree, Job } from "@/api/types";
import { GlobalState } from "./types";
import {
  ADD_SELECTED_ORGANIZATIONS,
  LOGIN_USER,
  LOGOUT_USER,
  RECEIVE_JOBS,
  RECEIVE_DEGREES,
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_DEGREES,
} from "@/store/constants";

const mutations = {
  [LOGIN_USER](state: GlobalState) {
    state.isLoggedIn = true;
  },
  [LOGOUT_USER](state: GlobalState) {
    state.isLoggedIn = false;
  },
  [RECEIVE_JOBS](state: GlobalState, jobs: Job[]) {
    state.jobs = jobs;
  },
  [RECEIVE_DEGREES](state: GlobalState, degrees: Degree[]) {
    state.degrees = degrees;
  },
  [ADD_SELECTED_ORGANIZATIONS](state: GlobalState, organizations: string[]) {
    state.selectedOrganizations = organizations;
  },
  [ADD_SELECTED_JOB_TYPES](state: GlobalState, jobTypes: string[]) {
    state.selectedJobTypes = jobTypes;
  },
  [ADD_SELECTED_DEGREES](state: GlobalState, degrees: string[]) {
    state.selectedDegrees = degrees;
  },
};

export default mutations;
