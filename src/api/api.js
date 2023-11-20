import axios from "axios";

const apiKey = "YOUR_TMDB_API_KEY";
const baseURL = "https://api.themoviedb.org/3";

const instance = axios.create({
  baseURL: baseURL,
  params: {
    api_key: apiKey,
    language: "en-US",
  },
});

export default instance;
