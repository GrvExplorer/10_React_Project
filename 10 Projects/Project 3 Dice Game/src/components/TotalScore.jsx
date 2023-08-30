import React from "react";
import styled from "styled-components";

const TotalScore = ({ isScore }) => {
  return (
    <Score>
      <h1>{isScore}</h1>
      <p>Total Score</p>
    </Score>
  );
};

export default TotalScore;

const Score = styled.div`
  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 100px;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
  }
`;
