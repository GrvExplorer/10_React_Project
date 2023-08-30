import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;
  min-width: 220px;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;

export const Outline_btn = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
  transition: 0.4s background ease-in;
  &:hover {
    background-color: black;
    color: white;
    transition: 0.3s background ease-in;
    border: 1px solid transparent;
  }
`;
