import styled from "styled-components";

export const NextStp = ({Next, value}) => {
  return <NextBtn type="button" onClick={() => Next(value)}>Next Step</NextBtn>;
};

export const BackStp = () => {
  return <BackBtn type="button" onClick={() => Next(value)}>Go Back</BackBtn>;
};

const NextBtn = styled.button`
  background-color: hsl(213, 96%, 18%);
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  border-radius: 10px;
  border: none;
`;
const BackBtn = styled.button`
  border: none;
  color: hsl(231, 11%, 63%);
  font-size: 16px;
`;
