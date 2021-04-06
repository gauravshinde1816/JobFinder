import { FETCH_JOBS } from "./types";
import { reverseGeocode } from "latlng-to-zip";
import qs from "qs";
import axios from "axios";
// const BASE_URL = "https://api.adzuna.com/v1/api/jobs/gb/search/1?";
// const JOBS_PARAMS = {
//   app_id: "86724056",
//   app_key: "e53d5a8fa675d1852fadafe281615973",
//   what: "java",
// };
// const buildURL = (zip) => {
//   const query = qs.stringify({ ...JOBS_PARAMS, where: zip });
//   return `${BASE_URL}${query}`;
// };
// export const fetchJobs = (latlang) => async (dispatch) => {
//   try {
//     const zip = await reverseGeocode(latlang);
//     const url = buildURL(zip);
//     const res = await axios(url);
//     console.log(url);
//     console.log(res.data);
//     dispatch({
//       type: FETCH_JOBS,
//       payload: res.data,
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const fetchJobs = (region, callback) => async (dispath) => {
  try {
    console.log(region);
    const res = await axios.get(
      `https://jobs.github.com/positions.json?lat=${region.latitude}&long=${region.longitude}`
    );
    // console.log(res.data);
    dispath({
      type: FETCH_JOBS,
      payload: res.data,
    });
    callback();
  } catch (error) {
    console.log(error);
  }
};
