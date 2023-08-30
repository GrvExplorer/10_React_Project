import MyBalance from './mybalance/MyBalance'
import SpendingCharTotal from './spendings/SpendingCharTotal'


const ExpensesChartBody = ({data}) => {
  return (
    <div className='expensesChartBody'>
    <MyBalance />
    <SpendingCharTotal data={data} />
    </div>
  )
}

export default ExpensesChartBody