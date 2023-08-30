import { BackStp, Confirm, NextStp } from "./Buttons";
import {
  Div,
  Form,
  Plans,
  Box,
  Switch,
  Position,
  CheckBox,
  Thanks,
} from "./StyledComponents";
import pic1 from "./images/icon-arcade.svg";
import pic2 from "./images/icon-advanced.svg";
import pic3 from "./images/icon-pro.svg";
import pic5 from "./images/icon-thank-you.svg";

import { PositionBtn } from "../App";

import { useState } from "react";
import { Formik} from "formik";

export const Step1 = ({ Inname, Inemail, InphoneNum, dispatch }) => {
  return (
    <>
      <Form>
        <Formik>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="e.g. Stephen King"
                name="name"
                value={Inname}
                onChange={(e) =>
                  dispatch({ type: "Inname", value: e.target.value })
                }
              ></input>
            </div>

            <div>
              <label htmlFor="emailAddress">Email Address</label>
              <input
                type="email"
                placeholder="e.g. StephenKing@lorem.com"
                name="emailAddress"
                value={Inemail}
                onChange={(e) =>
                  dispatch({ type: "Inemail", value: e.target.value })
                }
              ></input>
            </div>

            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="number"
                placeholder="e.g. +1 234567890"
                name="phoneNumber"
                value={InphoneNum}
                onChange={(e) =>
                  dispatch({ type: "InphoneNum", value: e.target.value })
                }
              ></input>
            </div>
          </form>
        </Formik>
      </Form>
    </>
  );
};

export const Step2 = ({ changeStpProp }) => {
  const [isYearorMonth, setIsYearorMonth] = useState(false);
  const [isPlanSelected, setIsPlanSelected] = useState(1);

  const changePlan = (value) => {
    setIsPlanSelected(value);
  };

  const changePlanYearorMonth = (value) => {
    setIsYearorMonth(value);
  };

  const arrrayOfPlansYearandMonthe2 = [
    [
      { image: pic1, type: "Arcade", price: "$9/mo", num: 1 },
      { image: pic2, type: "Advanced", price: "$12/mo", num: 2 },
      { image: pic3, type: "Pro", price: "$15/mo", num: 3 },
    ],
    [
      { image: pic1, type: "Arcade", price: "$90/yr", num: 1 },
      { image: pic2, type: "Advanced", price: "$120/yr", num: 2 },
      { image: pic3, type: "Pro", price: "$150/yr", num: 3 },
    ],
  ];

  return (
    <Form>
      <div className="margin">
        <Plans>
          {arrrayOfPlansYearandMonthe2[isYearorMonth ? 1 : 0].map(
            (value, i) => (
              <Box
                isPlanSelected={isPlanSelected === value.num}
                key={i}
                onClick={() => changePlan(value.num)}
              >
                <img src={value.image} alt="" />
                <div>
                  <h4>{value.type}</h4>
                  <p>{value.price}</p>
                </div>
              </Box>
            )
          )}
        </Plans>
        <Switch>
          <label
            htmlFor=""
            className="switch"
            onClick={(e) => changePlanYearorMonth(e.target.checked)}
          >
            <input type="checkbox" />
            <span className="slider round"> Yearly</span>
          </label>
        </Switch>
      </div>
    </Form>
  );
};
export const Step3 = ({ changeStpProp }) => {
  const arrrayOfPlansYearandMonthe = [
    [
      {
        para: "Access to multiplayer games",
        head: "Online service",
        price: "+$1/mo",
        num: 1,
      },
      {
        para: "Extra 1TB of cloude space",
        head: "Large storage",
        price: "+$2/mo",
        num: 2,
      },
      {
        para: "Custom theme on your profile",
        head: "Customizable profile",
        price: "+$2/mo",
        num: 3,
      },
    ],
    [
      {
        para: "Access to multiplayer games",
        head: "Online service",
        price: "+$10/yr",
        num: 1,
      },
      {
        para: "Extra 1TB of cloude space",
        head: "Large storage",
        price: "+$20/yr",
        num: 2,
      },
      {
        para: "Custom theme on your profile",
        head: "Customizable profile",
        price: "+$20/yr",
        num: 3,
      },
    ],
  ];

  const [isChecked, setIsChecked] = useState(1);

  const changeBlue = (value) => {
    setIsChecked(value);
  };

  return (
    <Form>
      <div>
        <h1>Pick add-ons</h1>
        <p>Add-ons help you enhance you gaming experience</p>
        <div className="service">
          {arrrayOfPlansYearandMonthe[0].map((value, i) => (
            <CheckBox key={i} chek={isChecked === value.num}>
              <label htmlFor="">
                <input type="checkbox" onClick={() => changeBlue(value.num)} />
                <div>
                  <h2>{value.head}</h2>
                  <p>{value.para}</p>
                </div>
                <span>{value.price}</span>
              </label>
            </CheckBox>
          ))}
        </div>
      </div>
      <div className="set">
        <Position>
          <BackStp Next={changeStpProp} value={2} />
          <NextStp Next={changeStpProp} value={4} />
        </Position>
      </div>
    </Form>
  );
};
export const Step4 = ({ changeStpProp }) => {
  return (
    <Form>
      <div>
        <h1>Finishing up</h1>
        <p>Dobule-check everything look OK before confirming</p>
      </div>
      <div className="set">
        <Position>
          <BackStp Next={changeStpProp} value={3} />
          <Confirm Next={changeStpProp} value={5} />
        </Position>
      </div>
    </Form>
  );
};

export const Step5 = () => {
  return (
    <Thanks>
      <div>
        <img src={pic5} alt="" />
      </div>
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! hope you have fun using our
        platform. if you need ever need support please feel free to email us at
        support@loremgaming.com.
      </p>
    </Thanks>
  );
};
