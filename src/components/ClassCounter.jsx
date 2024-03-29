import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure, incrementCount, decrementCount } from '../features/counterSlice';
import { fetchDataFromApi } from '../api';
import '../index.css';

const ClassCounter = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1); // Додайте стан для відстеження поточної сторінки
  const data = useSelector(state => state.counter.data);
  const loading = useSelector(state => state.counter.loading);
  const error = useSelector(state => state.counter.error);
  const count = useSelector(state => state.counter.count);
  
  useEffect(() => {
    dispatch(fetchDataRequest());
    fetchDataFromApi(currentPage).then(
      response => {
        dispatch(fetchDataSuccess(response));
      },
      error => {
        dispatch(fetchDataFailure(error.message));
      }
    );
  }, [dispatch, currentPage]); // Оновіть ефект залежності, щоб реагувати на зміну поточної сторінки
  
  const handleIncrement = () => {
    dispatch(incrementCount());
  };
  
  const handleDecrement = () => {
    dispatch(decrementCount());
  };
  
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1); // Збільшити поточну сторінку на 1 при натисканні кнопки "Next"
  };
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div>
      <button className="button" onClick={handleIncrement}>Increment Count</button>
      <button className="button" onClick={handleDecrement}>Decrement Count</button>
      
      <p className="description">Count: {count}</p>
      {data && data.Search && data.Search.map((item, index) => (
        <div key={index}>
          <p>Title: {item.Title}</p>
          <p>Year: {item.Year}</p>
          <p>Type: {item.Type}</p>
        </div>
        
      ))}
      <button onClick={handleNextPage}>Next</button> {/* Додайте кнопку "Next" */}
    </div>
  );
};

export default ClassCounter;
