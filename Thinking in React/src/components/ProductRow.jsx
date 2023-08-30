
const ProductRow = ({product}) => {
  return (
    <div>{product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>} <span>{product.price}</span></div>
  )
}

export default ProductRow