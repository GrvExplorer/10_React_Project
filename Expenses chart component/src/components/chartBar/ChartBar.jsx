import styled from "styled-components";
import styles from "./ChartBar.module.css";

const ChartBar = ({ data }) => {
  return (
    <div className={styles.body}>
      {data.map((d, i) => (
        <div key={i}>
          <Bar
            className={styles.tooltip}
            back={i === 2}
            height = {d.amount}
          >
            <span className={styles.tooltiptext}>{"$" + d.amount}</span>
          </Bar>
          <p>{d.day}</p>
        </div>
      ))}
    </div>
  );
};

export default ChartBar;

const Bar = styled.div`
  border-radius: 6px;
  background-color: ${(prop) => (prop.back ? '#76B5BC' : '#ec755d')};
  margin-bottom: 8px;
  width: 52px;
  height: ${(prop) => (prop.height*3)}px;

  @media (max-width: 375px) {
    width: 30px;
    height: ${(prop) => (prop.height*2)}px;
  }
`;
