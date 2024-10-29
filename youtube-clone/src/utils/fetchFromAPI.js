import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key":
      process.env.REACT_APP_RAPID_API_KEY ||
      "28b2812a36mshd8c2b7256e5bec7p142682jsnf16bd9f57fe8",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const fullUrl = `${BASE_URL}/${url}`;
  console.log(fullUrl);
  const { data } = await axios.get(fullUrl, options);

  return data;
};
