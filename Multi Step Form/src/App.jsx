import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Stepsmenu from "./components/Stepsmenu";
import styled, { ThemeProvider } from "styled-components";
import { Step1, Step2, Step3, Step4, Step5 } from "./components/Steps";
import Title from "./components/Title";
import { BackStp, Confirm, NextStp } from "./components/Buttons";

const reducer = (state, action) => {
  switch (action.type) {
    case "activeStep":
      return { ...state, activeStep: state.activeStep + 1 };
    case "Inname":
      return { ...state, name: action.value };

    case "title":
      return {
        ...state,
        activeTitle: {
          title: "Select your plan",
          subTitle: "You have the option of monthly or yearly billing",
        },
      };
    default:
      state;
  }
};

function App() {

  const [state, dispatch] = useReducer(reducer, {
    activeStep: 1,
    activeTitle: {
      title: "Personal info",
      subTitle: "Please provide your name, email, address and phone number",
    },
    whichBtnActive: { goBack: false, conformBtn: true },
    name: "",
    email: "",
    phoneNum: "",
  });

  const theme = {};

  return (
    <>
      <ThemeProvider theme={theme} />
      <Body>
        <Form>
          <Stepsmenu isSelected={state.activeStep} />
          <DetailsStd>
            <Title
              title={state.activeTitle.title}
              subTitle={state.activeTitle.subTitle}
            />
            {/* <Step1 dispatch={dispatch} Inname={state.name} Inemail={state.email} InphoneNum={state.phoneNum} /> */}

            <Step2 />

            <PositionBtn>
              {state.whichBtnActive.goBack ? <BackStp /> : ""}
              {state.whichBtnActive.conformBtn ? <NextStp /> : <Confirm />}
            </PositionBtn>
          </DetailsStd>
        </Form>
      </Body>
    </>
  );
}

export default App;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: hsl(206, 94%, 87%);
`;

const Form = styled.form`
  display: flex;
  gap: 100px;
  height: 80%;
  width: 60%;
  background-color: hsl(0, 0%, 100%);
  border-radius: 10px;
  padding: 16px;
`;

const DetailsStd = styled.div`
  padding-top: 24px;
  width: 80%;
`;

export const PositionBtn = styled.div`
  padding: 50px 0px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  height: 42%;
`;
