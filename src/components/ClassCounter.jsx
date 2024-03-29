import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure, incrementCount, decrementCount } from '../features/counterSlice';
import { fetchDataFromApi } from '../api';
import '../index.css';

const ClassCounter = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [containerLoading, setContainerLoading] = useState(false);
  const error = useSelector(state => state.counter.error);
  const count = useSelector(state => state.counter.count);
  const data = useSelector(state => state.counter.data); // Отримання даних зі стору
  
  useEffect(() => {
    setContainerLoading(true);
    
    dispatch(fetchDataRequest());
    fetchDataFromApi(currentPage).then(
      response => {
        dispatch(fetchDataSuccess(response));
        setContainerLoading(false);
      },
      error => {
        dispatch(fetchDataFailure(error.message));
        setContainerLoading(false);
      }
    );
  }, [dispatch, currentPage]);
  
  const handleIncrement = () => {
    dispatch(incrementCount());
  };
  
  const handleDecrement = () => {
    dispatch(decrementCount());
  };
  
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  return (
    <div>
      <button className="button" onClick={handleIncrement}>Increment Count</button>
      <button className="button" onClick={handleDecrement}>Decrement Count</button>
      
      <p className="description">Count: {count}</p>
      
      <div className="container">
        {containerLoading ? <div>Loading...</div> : null}
        
        {!containerLoading && !error && (
          <>
            {data && data.Search && data.Search.map((item, index) => (
              <div className="results" key={index}>
                <p>Title: {item.Title}</p>
                <p>Year: {item.Year}</p>
                <p>Type: {item.Type}</p>
              </div>
            ))}
            <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
            <button onClick={handleNextPage}>Next</button>
          </>
        )}
        
        {error && <div>Error: {error}</div>}
      </div>
    </div>
  );
};

export default ClassCounter;
