import styled from "styled-components";
import { Button, Outline_btn } from "./button/Button";
import { useState } from "react";

let text = "Show";
const RollDice = ({ isRolled, changeImg, resetScore }) => {
  const [isTap, setIsTap] = useState(false);
  const toggle = () => {
    setIsTap(!isTap);
    text = isTap ? "Show" : "Hide"
  };

  return (
    <Container>
      <div onClick={changeImg}>
        <img src={`/images/dice_${isRolled}.png`} alt="Dice" />
      </div>
      <p>Click on Dice to roll</p>
      <Button onClick={resetScore}>Reset Score</Button>
      <Outline_btn onClick={toggle}>{text} Rules</Outline_btn>
      <Rules isTap={isTap}>
        <h1>How to play dice game</h1>
        <p>
          Select any number <br />
          Click on dice image <br />
          after click on dice if selected number is equal to dice number you
          will get same point as dice <br />
          if you get wrong guess then 2 point will be dedcuted{" "}
        </p>
      </Rules>
    </Container>
  );
};

export default RollDice;

const Rules = styled.div`
  display: ${(props) => (props.isTap ? "block" : "none")};
  padding: 20px;
  background: #fbf1f1;
  margin: 40px 0px;
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: 15px 0px 36px 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
  }
  Button {
    margin-bottom: 24px;
  }
`;
