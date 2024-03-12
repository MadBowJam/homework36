import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDataComponent = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        setUserData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  if (loading) {
    return <div>Loading data...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div className="user-data-component">
      <h2>User Data:</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
    </div>
  );
};

export default UserDataComponent;
