import React, { useEffect } from "react";
import TotalScore from "./TotalScore";
import NumberSelect from "./NumberSelect";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";

let showError;

const Gameplay = () => {
  const [isSelected, setIsSelected] = useState();
  const [isRolled, setIsRolled] = useState(1);
  const [isScore, setScore] = useState(0);
  const [error, setError] = useState("")

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const changeImg = () => {
    if (!isSelected) {
      setError("You have not selected any number")
      return;
    };
    const randomNumber = generateRandomNumber(1, 7);
    setIsRolled((prev) => randomNumber);


    if (isSelected === randomNumber){
      setScore((prev) => prev + isSelected)
    }else{
      setScore((prev) => prev - 2)
    } 
    setIsSelected()
  };

  const resetScore = () => {
    setScore(0)
    setError("")
  }


  return (
    <>
      <Container>
        <TotalScore isScore={isScore} />
        <NumberSelect error={error} setError={setError} isSelected={isSelected} setIsSelected={setIsSelected} />
      </Container>
      <RollDice resetScore={resetScore} isRolled={isRolled} changeImg={changeImg} />
    </>
  );
};

export default Gameplay;

const Container = styled.div`
  width: 1280px;
  margin: 0px auto;
  margin-top: 64px;
  display: flex;
  justify-content: space-between;
`;
