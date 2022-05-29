import {
  ADD_SELECTED_ORGANIZATIONS,
  LOGIN_USER,
  LOGOUT_USER,
  RECEIVE_JOBS,
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
};

export default mutations;
