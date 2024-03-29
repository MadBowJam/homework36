// api.js
export const fetchData = async () => {
  try {
    const response = await fetch('https://www.omdbapi.com/?s=iron&page=1&apikey=678c5362');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    console.log('Received data:', data); // Вивести отримані дані у консоль
    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};
