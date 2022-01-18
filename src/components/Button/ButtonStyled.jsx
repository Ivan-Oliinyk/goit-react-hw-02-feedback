import styled from "styled-components";

export const ButtonComponent = styled.button`
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 5px;
  }
`;
