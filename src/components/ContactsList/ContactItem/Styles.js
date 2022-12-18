import styled from 'styled-components';

export const StyledContact = styled.div`
  display: flex;
  width: 100%;
  .contactName {
    display: block;
    width: 60%;
    font-size: 16px;
    font-weight: 500;
  }
  .contactNumber {
    width: 40%;
    text-decoration: none;
    font-size: 16px;
    color: darkgreen;
  }
  .contactNumber:hover {
    color: darkseagreen;
    text-decoration: underline;
  }
`
