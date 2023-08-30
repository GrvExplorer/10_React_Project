import React from "react";
import { Button } from "./button/Button";
import styled from "styled-components";

const Startgame = (props) => {
  const { toggle } = props;
  return (
    <>
      <Container>
        <img src="/images/dices 1.png" alt="" />
        <div>
          <h1 className="heading">Dice Game</h1>
          <div className="end">
            <Button className="end" onClick={toggle}>Play Now</Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Startgame;

const Container = styled.div`
  display: flex;
  width: 1182px;
  margin: 0 auto;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 5px;
  .heading {
    text-transform: uppercase;
    font-style: normal;
    text-align: end;
    width: 600px;
    font-weight: 700;
    font-size: 96px;
    line-height: 144px;
  }
  .end {
    display: flex;
    justify-content: end;
  }
`;
