// api.js
export const fetchDataFromApi = async (currentPage, pageSize) => {
  try {
    const nextPageUrl = `https://www.omdbapi.com/?s=iron&page=${currentPage}&apikey=678c5362&pageSize=${pageSize}`;
    const response = await fetch(nextPageUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    console.log('Received data:', data);
    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};
