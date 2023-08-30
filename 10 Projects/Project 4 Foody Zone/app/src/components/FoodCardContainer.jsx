import { styled } from "styled-components";
import { Button } from "../App";

const FoodCardContainer = ({ data: foods, filteredText, BtnFilteredType }) => {
    const rows = []
    foods?.map((food, i) => {

        if (food.name.toLowerCase().indexOf(filteredText.toLowerCase()) === -1) {
            return ;
        }

        if (food.type.toLowerCase().indexOf(BtnFilteredType.toLowerCase()) === -1) {
            return ;
        }

        rows.push(<Product key={i}>
            <div>
              <img src={"http://localhost:9000" + food.image} alt="" />
            </div>
            <div className="padding">
              <p className="name">{food.name}</p>
              <p className="text">{food.text}</p>
              <div className="end">
                <Button>{"$" + food.price}</Button>
              </div>
            </div>
          </Product>)
})
  return (
    <Foods>
      {rows}
    </Foods>
  );
};

export default FoodCardContainer;

const Foods = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  justify-content: center;
  height: 375px;
  padding-top: 80px;
  @media (max-width: 1025px) {
    padding-top: 25px;
    padding-bottom: 25px;
  }
`;

const Product = styled.div`
padding: 12px;
  display: flex;
  width: 340px;
  height: 167px;
  border-radius: 30px;
  background: url(<path-to-image>),
    lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat,
    radial-gradient(
      151.92% 127.02% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.04) 77.08%,
      rgba(70, 144, 212, 0) 100%
    );
  background-blend-mode: overlay, normal;
  flex-shrink: 0;
  backdrop-filter: blur(13.184196472167969px);
  .padding {
    padding-left: 17px;
  }
  .name {
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .text {
    width: 168px;
    height: 59px;
    padding-top: 8px;
    color: #fff;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .end{
    display: flex;
    padding-top: 30px;
    padding-right: 15px;
    /* background-color: pink; */
    justify-content: end;
    text-align: end;
     color: #FFF;
     font-family: Inter;
     font-size: 14px;
     font-style: normal;
     font-weight: 400;
     line-height: normal;
  }
`;
