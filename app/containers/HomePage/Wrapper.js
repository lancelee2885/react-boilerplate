import styled from 'styled-components';

export const ItemsContanier = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  padding-top: 50px;
  height: fit-content;
`;

export const ItemsWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  grid-gap: 16px;
  padding-bottom: 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
