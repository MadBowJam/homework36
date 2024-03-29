import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../features/counterSlice';
import { fetchData } from '../api'; // Імпортуйте функцію fetchData з вашого файлу api.js

const ClassCounter = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.counter.data);
  const loading = useSelector(state => state.counter.loading);
  const error = useSelector(state => state.counter.error);
  
  useEffect(() => {
    const fetchDataFromApi = async () => {
      dispatch(fetchDataRequest());
      try {
        const responseData = await fetchData();
        dispatch(fetchDataSuccess(responseData));
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
    };
    
    fetchDataFromApi();
  }, [dispatch]);
  
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
    </div>
  );
};

export default ClassCounter;
