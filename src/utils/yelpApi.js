const API_KEY = import.meta.env.VITE_YELP_API_KEY;
const BASE_URL = "https://api.yelp.com/v3/businesses/search";

export const fetchData = async (search, location, selectOption) => {
  const queryParameters = `?term=${search}&location=${location}&sort_by=${selectOption}&limit=21`;
  const endpoint = `${BASE_URL}${queryParameters}`;
  const response = await fetch(endpoint, {
    headers: {
      accept: "application/json",
      authorization: `Bearer ${API_KEY}`,
    },
  });
  try {
    if (response.ok) {
      const jsonResponse = await response.json();
      const businessesData = await jsonResponse;
      return businessesData;
    }
    throw new Error("Request failed!");
  } catch (error) {
    console.error(error);
  }
};
