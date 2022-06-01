import axios from "axios";

import { Degree } from "./types";

const getDegrees = async () => {
  const baseUrl = process.env.VUE_APP_API_URL; //defined in .env separate file
  const response = await axios.get<Degree[]>(`${baseUrl}/degree`);

  return response.data;
};

export default getDegrees;
