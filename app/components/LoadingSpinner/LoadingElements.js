import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 3px solid grey;
  border-right: 3px solid grey;
  border-bottom: 3px solid grey;
  border-left: 5px solid black;
  background: transparent;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

export default Spinner;
