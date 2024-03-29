// ClassCounter.jsx

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../features/counterSlice';
import { fetchDataFromApi } from '../api';

const ClassCounter = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.counter.data);
  const loading = useSelector(state => state.counter.loading);
  const error = useSelector(state => state.counter.error);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    fetchDataFromApi(currentPage)
      .then(responseData => dispatch(fetchDataSuccess(responseData)))
      .catch(error => dispatch(fetchDataFailure(error.message)));
  }, [currentPage, dispatch]);
  
  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div>
      {data && data.Search && data.Search.map((item, index) => (
        <div key={index}>
          <p>Title: {item.Title}</p>
          <p>Year: {item.Year}</p>
          <p>Type: {item.Type}</p>
        </div>
      ))}
      <button onClick={handleNextPage}>Далі</button>
    </div>
  );
};

export default ClassCounter;
