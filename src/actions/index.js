import { ADD_FETCHED_DATA } from "./types.js";
import axios from "axios";

const apiUrl = "https://61e7cff2e32cd90017acbdad.mockapi.io/products";

export const fetchData = () => {
  return (dispatch) => {
    return axios
      .get(apiUrl)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        // console.log("data", data);
        dispatch({
          type: ADD_FETCHED_DATA,
          payload: data
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};
