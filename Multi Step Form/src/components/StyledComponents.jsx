import styled from "styled-components";

const Plans = styled.section`
  display: flex;
  gap: 20px;
`;

const Switch = styled.section`
  /* .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:foucs + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  .slider .round {
    border-radius: 34px;
  }

  .slider .round:before {
    border-radius: 50%;
  }
 */
`;

const Box = styled.div`
  border-radius: 10px;
  border: 1px solid
    ${({ isPlanSelected }) => (isPlanSelected ? "blue" : "lightgray")};
  width: 150px;
  height: 185px;
  padding: 18px 0px 0px 16px;

  img {
    width: 54px;
    height: 54px;
  }
  div {
    padding-top: 20px;
    p {
      padding: 0px;
    }
    h4 {
      font-size: 18px;
      font-weight: 700;
      color: #6d6d84;
    }
  }
`;

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

  .service {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .set {
    display: flex;
    width: 130%;
    height: 25%;
    section {
      height: 100%;
    }
  }
`;

const Position = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: end;
  height: 30%;
  width: 100%;
  padding: 20px;
`;


const Thanks = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 40px;
  gap: 20px;
  img {
    width: 100px;
    height: 100px;
  }
  p {
    color: hsl(231, 11%, 63%);
    font-weight: 600;
  }

`

const CheckBox = styled.section`
width: 130%;
border: 1px solid ${({ chek }) => (chek ? "blue" : "lightgray")};
border-radius: 10px;
padding-bottom: 10px;
  label {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    input {
      width: 24px;
      height: 24px;
    }
    h2 {
      color: black;
      font-size: 20px;
      font-weight: 600;
    }
    p {
      padding: 0px;
      font-size: 14px;
    }
    div {
      width: 60%;
      margin-top: 0px;
    }
    span {
      color: hsl(243, 100%, 62%);
    }
  }

`


const Div = styled.div`  
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
`;

export { Div, Form, Plans, Box, Switch, Position, CheckBox, Thanks };
