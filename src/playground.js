const axios = require("axios");

const url = "http://localhost:3000/jobs";

const fetchJobsVTradiionalPromise = () => {
  axios.get(url).then((response) => {
    console.log(response.data);
  });
};

const fetchJobsVAsyncAwait = async () => {
  const response = await axios.get(url);
  console.log(response.data);
};
