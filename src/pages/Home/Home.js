import React, { useState, useEffect } from 'react';
import {
  StyledSection,
  StyledErrorSection,
  StyledList,
  StyledLoaderSection
} from './Home.styles';
import Button from '@material-ui/core/Button';
import ReactLoading from "react-loading";
import axios from 'axios';

const Home = ({ handleShowMenuTextButtonClick }) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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
          setIsLoading(false);
        }
      } catch {
        setError(true);
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    fetchData();
  }, [])

  return (
    <StyledSection>
      <Button variant="contained" color="primary" onClick={handleShowMenuTextButtonClick}>POKAŻ</Button>
      {error && <StyledErrorSection>Data fetching error!</StyledErrorSection>}
      <StyledLoaderSection>
        {isLoading && <ReactLoading type='spin' color='black' />}
      </StyledLoaderSection>
      <StyledList>
        {
          data &&
          data.map(user => (
            <li key={user.id}>{user.first_name} {user.last_name}</li>
          ))
        }
      </StyledList>
    </StyledSection>
  );
}

export default Home;
