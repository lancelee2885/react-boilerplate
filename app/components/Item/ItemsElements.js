import styled from 'styled-components';

export const ItemsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 440px;
  width: 400px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  overflow-y: scroll;
  @media screen and (max-width: 768px) {
    max-height: 500px;
    width: 220px;
  }
  @media screen and (max-width: 480px) {
    max-height: 500px;
    width: 180px;
  }
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const ItemsIcon = styled.img`
  height: 40px;
  width: 40px;
  margin-bottom: 10px;
`;

export const ItemsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ItemsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ItemsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
