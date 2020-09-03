import React, { useState, useEffect } from 'react';
import { StyledSection } from './Home.styles';
import axios from 'axios';

const Home = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('https://reqres.in/api/users?page=2');
        setData(result.data.data);
      } catch {

      }
    }
    fetchData();
  }, [])

  return (
    <StyledSection>
      <ul>
        {
          data &&
          data.map(user => (
            <li key={user.id}>{user.first_name} {user.last_name}</li>
          ))
        }
      </ul>
    </StyledSection>
  );
}

export default Home;
