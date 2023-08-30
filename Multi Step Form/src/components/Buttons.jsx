import styled from "styled-components";

export const NextStp = () => {
  return (
    <div style={{ textAlign: "end", width: "100%" }}>
      <NextBtn type="submit">Next Step</NextBtn>
    </div>
  );
};

export const BackStp = () => {
  return <BackBtn type="button">Go Back</BackBtn>;
};

export const Confirm = () => {
  return <div style={{ textAlign: "end", width: "100%" }}>
    <ConfirmBtn type="button">Confirm</ConfirmBtn>
  </div>;
};

const NextBtn = styled.button`
  background-color: hsl(213, 96%, 18%);
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
const ConfirmBtn = styled.button`
  background-color: hsl(243, 100%, 62%);
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
const BackBtn = styled.button`
  border: none;
  background-color: white;
  display: flex;
  justify-content: start;
  padding-bottom: 15px;
  color: hsl(231, 11%, 63%);
  width: 150px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
`;
