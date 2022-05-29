import getJobs from "@/api/getJobs.js";
import { FETCH_JOBS, RECEIVE_JOBS } from "@/store/constants.js";

const actions = {
  [FETCH_JOBS]: async (context) => {
    const jobListings = await getJobs();
    context.commit(RECEIVE_JOBS, jobListings);
  },
};

export default actions;
