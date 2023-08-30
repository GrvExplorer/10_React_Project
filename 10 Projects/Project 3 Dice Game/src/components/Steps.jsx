import styled from "styled-components";
import { NextStp } from "./Buttons";

export const Step1 = ({ changeStpProp }) => {
  return (
    <>
      <Form>
        <h1>Personal info</h1>
        <p>Please provide your name, email, address and phone number</p>

        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            name="name"
          ></input>
        </div>

        <div>
          <label htmlFor="emailAddress">Email Address</label>
          <input
            type="email"
            placeholder="e.g. StephenKing@lorem.com"
            name="emailAddress"
          ></input>
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="number"
            placeholder="e.g. +1 234567890"
            name="phoneNumber"
          ></input>
        </div>

        <Div>
        <NextStp Next={changeStpProp} value={2} />
        </Div>

      </Form>
    </>
  );
};

export const Step2 = ({ changeStpProp }) => {
  return <Form>
    <h1>Select your plan</h1>
    <p>You have the option of monthly or yearly billing</p>
  </Form>;
};
export const Step3 = ({ changeStpProp }) => {
  return <div>Step 3</div>;
};
export const Step4 = () => {
  return <div>Step 4</div>;
};

const Form = styled.div`
position: relative;
  padding-top: 25px;
  p {
    color: hsl(231, 11%, 63%);
    font-weight: 600;
    padding: 12px 0px 24px 0px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 18px;
    label {
      margin-top: 8px;
      font-weight: 600;
      font-size: 17px;
      color: hsl(230.76923076923072, 5.26315789473684%, 51.56862745098039%);
    }

    input {
      height: 44px;
      font-size: 14px;
      padding-left: 12px;
      border-radius: 5px;
      font-weight: 500;
    }
  }
`;

const Div = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`