import { FETCH_JOBS } from "../actions/types";
const initaltialState = {
  jobs: [],
};
export default function (state = initaltialState, action) {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        jobs: action.payload,
      };

    default:
      return state;
  }
}
