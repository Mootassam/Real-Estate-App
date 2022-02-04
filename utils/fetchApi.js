import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "e2769edeb2mshffd2d1a42d0ec05p15ebc1jsn48abb632fb0b",
    },
  });
  return data;
};
