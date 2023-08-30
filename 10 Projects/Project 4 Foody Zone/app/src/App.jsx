import { useEffect, useState } from "react";
import styled from "styled-components";
import FoodCardContainer from "./components/FoodCardContainer";

const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredText, setFilteredText] = useState('')
  const [BtnFilteredType, setBtnFilteredType] = useState('')

  useEffect(() => {
    const fectchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const jsonResponse = await response.json();
        setData(jsonResponse);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };  
    fectchData()
  }, [])

if(error) return <div>{error}</div>
if(loading) return <div>loading...</div>


  return (
    <MainContainer>
      <TopSection>
        <div className="top">
          <div className="logo">
            <img src="/logo.svg" alt="LOGO" />
          </div>
          <div className="search">
            <input type="text" value={filteredText} onChange={(e) => (setFilteredText(e.target.value))} name="" placeholder="Search Food..." id="" />
          </div>
        </div>

        <div className="navigationFood">
          <Button onClick={() => setBtnFilteredType('')}>All</Button>
          <Button onClick={() => setBtnFilteredType('breakfast')}>Breakfast</Button>
          <Button onClick={() => setBtnFilteredType('lunch')} >Lunch</Button>
          <Button onClick={() => setBtnFilteredType('dinner')}>Dinner</Button>
        </div>
      </TopSection>
      <HeroSection>
        <FoodCardContainer BtnFilteredType={BtnFilteredType} filteredText={filteredText} data={data} /> 
      </HeroSection>
    </MainContainer>
  );
};

export default App;



const HeroSection = styled.section`
  height: calc(100vh - 190px);
  background: url("/bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex-shrink: 0;
  
  @media (max-width: 1025px) {
    overflow-y: scroll;
  }
`;

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopSection = styled.section`
  display: flex;
  background: #323334;
  flex-direction: column;
  justify-content: flex-start;
  padding: 24px;
  min-height: 140px;
  gap: 54px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 425px) {
      flex-direction: column;
      gap: 24px;
    }
    .search {
      input {
        background-color: transparent;
        color: #fff;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding: 10px 15px;
        border-radius: 5px;
        border: 1px solid #ff0909;
        height: 40px;
      }
    }
  }

  .navigationFood {
    padding-bottom: 16px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 14px;
  }
`;

export const Button = styled.button`
  border: none;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  padding: 6px 12px;
  border-radius: 5px;
  background: #ff4343;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  &:hover {
    background-color: #e56363;
  }
`;
