import styled from 'styled-components';
import { darken } from 'polished';

export const Control = styled.div`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  div:nth-child(n) {
    padding: 0;
    margin: 0 5px;
    button {
      outline: 0;
      margin: 0;
      svg {
        color: #34495e;
        font-size: 24px;
        &:hover {
          color: ${darken(0.3, '#34495e')};
          transition: 800ms;
        }
      }
    }
  }
`;
