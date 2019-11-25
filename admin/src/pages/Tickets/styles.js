import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div`
  padding: 20px;
  height: 100%;

  button {
    margin: 10px;
  }

  table {
    thead {
      tr {
        text-align: center;
      }
    }
    tbody {
      tr {
        td {
          text-align: center;
          vertical-align: middle;
        }
        td:last-child {
          /* width: 160px; */
        }
      }
    }
  }
`;
