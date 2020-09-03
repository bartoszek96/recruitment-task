import React, { useState, useEffect } from 'react';
import { StyledSection, StyledErrorSection } from './Home.styles';
import axios from 'axios';

const Home = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        const result = await axios('https://reqres.in/api/users?page=2');
        if (result.status !== 200) {
          throw new Error();
        } else {
          setData(result.data.data);
        }
      } catch {
        setError(true);
      }
    }
    fetchData();
  }, [])

  return (
    <StyledSection>
      {error && <StyledErrorSection>Data fetching error!</StyledErrorSection>}
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
