import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=678c5362');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  // Перевіряємо, чи data не є null перед деструктуризацією
  if (!data) {
    return null;
  }
  
  // Деструктуризація об'єкта для отримання потрібних властивостей
  const { Title, Year, Rated, Released } = data;
  
  return (
    <div className="data-fetching-component">
      <h2>Data from server:</h2>
      <div>Title: {Title}</div>
      <div>Year: {Year}</div>
      <div>Rated: {Rated}</div>
      <div>Released: {Released}</div>
    </div>
  );
};

export default DataFetchingComponent;
