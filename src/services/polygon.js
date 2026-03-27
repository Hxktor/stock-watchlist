import axios from "axios";

const API_KEY = import.meta.env.VITE_POLYGON_API_KEY;

export const searchStocks = async (query) => {
  try {
    const response = await axios.get(
      "https://api.polygon.io/v3/reference/tickers",
      {
        params: {
          search: query,
          apiKey: API_KEY,
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error("Error fetching stocks:", error);
    return [];
  }
};