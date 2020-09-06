import React, { useState, useEffect } from 'react';
import {
  StyledSection,
  StyledErrorSection,
  StyledList,
  StyledLoaderSection
} from './Home.styles';
import Button from '@material-ui/core/Button';
import ReactLoading from "react-loading";

const Home = ({ handleShowMenuTextButtonClick }) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        setError('');
        const result = await fetch('https://reqres.in/api/users?page=2');
        const json = await result.json();
        setData(json);
        setIsLoading(false);
      } catch {
        setError('Data fetching error!');
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    fetchUsersData();
  }, [])

  return (
    <StyledSection>
      <Button variant="contained" color="primary" onClick={handleShowMenuTextButtonClick}>
        POKAŻ
      </Button>
      <StyledErrorSection>
        {error}
      </StyledErrorSection>
      <StyledLoaderSection>
        {isLoading && <ReactLoading type='spin' color='black' data-testid='loader' />}
      </StyledLoaderSection>
      <StyledList>
        {
          data &&
          data.data.map(user => (
            <li key={user.id}>{user.first_name} {user.last_name}</li>
          ))
        }
      </StyledList>
    </StyledSection>
  );
}

export default Home;
