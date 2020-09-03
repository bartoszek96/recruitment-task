import styled from 'styled-components';

export const StyledSection = styled.section`
  margin: auto;
  width: 50%;
  text-align: center;
`;

export const StyledErrorSection = styled(StyledSection)`
  color: red;
  font-weight: bold;
`;

export const StyledLoaderSection = styled(StyledSection)`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const StyledList = styled.ul`
  padding: 20px;
`;
