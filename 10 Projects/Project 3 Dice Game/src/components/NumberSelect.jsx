import React from "react";
import styled from "styled-components";

const NumberSelect = ({ error, isSelected, setIsSelected, setError }) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];
  
  const selectionNumber = (value) => {
    setIsSelected(value);
    setError("")
  };

  return (
    <Container>
      <p className="error">{error}</p>
      <div>
        {arrayNumber.map((value, i) => (
          <Box
            key={i}
            isSelected={isSelected === value}
            onClick={() => selectionNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </Container>
  );
};

export default NumberSelect;

const Container = styled.div`
  text-align: end;

  div {
    display: flex;
    gap: 24px;
  }
  p {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    padding-top: 30px;
  }
  .error {
    padding: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: red;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  width: 72px;
  border: 1px solid #000000;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  background: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  transition: 0.3s ease-in-out;
`;
