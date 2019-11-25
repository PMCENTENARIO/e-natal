import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (max-width: 1085px) {
    .rowDown {
      flex-direction: column;
    }
  }
  .rowDown {
    display: flex;

    background: #fff;
    margin: 10px;
    padding: 10px;
    border-radius: 4px;

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  .mapContainer {
    border: 1px solid #95a5a6;
    padding: 10px;
    border-radius: 4px;

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
`;
