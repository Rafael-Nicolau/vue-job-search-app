import {
  ADD_SELECTED_ORGANIZATIONS,
  LOGIN_USER,
  LOGOUT_USER,
  RECEIVE_JOBS,
  ADD_SELECTED_JOB_TYPES,
} from "@/store/constants.js";

const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [LOGOUT_USER](state) {
    state.isLoggedIn = false;
  },
  [RECEIVE_JOBS](state, jobs) {
    state.jobs = jobs;
  },
  [ADD_SELECTED_ORGANIZATIONS](state, organizations) {
    state.selectedOrganizations = organizations;
  },
  [ADD_SELECTED_JOB_TYPES](state, jobTypes) {
    state.selectedJobTypes = jobTypes;
  },
};

export default mutations;
