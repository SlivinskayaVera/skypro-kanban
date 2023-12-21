import styled from 'styled-components';

const sizes = {
    small: {
      fontSize: '0.8em',
      padding: '5px 10px'
    },
    medium: {
      fontSize: '1em',
      padding: '10px 20px'
    },
    large: {
      fontSize: '1.2em',
      padding: '15px 30px'
    }
  };

  export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: ${props => sizes[props.$size]?.padding || sizes.medium.padding};
  font-size: ${props => sizes[props.$size]?.fontSize || sizes.medium.fontSize};
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;