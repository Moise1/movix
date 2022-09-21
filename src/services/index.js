import axios from "axios";
import { API_KEY, API_URL } from "@env";

export const getPopularMovies = async () => {
  const { data } = await axios.get(
    `${API_URL}/3/movie/popular?api_key=${API_KEY}`
  );
  return data.results;
};

export const getUpcomingMovies = async () => {
  const { data } = await axios.get(
    `${API_URL}/3/movie/upcoming?api_key=${API_KEY}`
  );
  return data;
};

export const getPopularTv = async () => {
  const { data } = await axios.get(
    `${API_URL}/3/tv/popular?api_key=${API_KEY}`
  );
  return data;
};
