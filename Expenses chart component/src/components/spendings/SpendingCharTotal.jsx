import styled from "styled-components";
import ChartBar from "../chartBar/ChartBar";
import styles from "./SpendingChartTotal.module.css";

const SpendingCharTotal = ({ data }) => {
  return (
    <div className={styles.body}>
      <p className={styles.spending}>Spending = Last 7 days</p>

      <ChartBar data={data} />
      <Check>
        <div>
          <p className="total">Total this month</p>
          <p className="amount">$478.33</p>
        </div>
        <div>
          <p className="percent">+2.4%</p>
          <p className="total">from last month</p>
        </div>
      </Check>
    </div>
  );
};

export default SpendingCharTotal;

const Check = styled.div`
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #F3ECE2;;
  padding-top: 25px;
  .total {
    color: #9f948b;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .amount {
    color: #000;
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .percent {
    text-align: end;
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media (max-width: 375px) {
    padding-top: 10px;
    .total {
    font-size: 12px;
    font-weight: 500;
  }

  .amount {
    font-size: 28px;
    font-weight: 700;
  }

  .percent {
    text-align: end;
    font-size: 16px;
    font-weight: 700;
  }

  }
`;
