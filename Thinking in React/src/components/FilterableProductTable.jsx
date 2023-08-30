import { useState } from "react"
import ProductTable from "./ProductTable"
import SearchBar from "./SearchBar"

const FilterableProductTable = ({Products}) => {

  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false) 
  
  return (
   <>
   <SearchBar filterText={filterText} changeFilterText={setFilterText}  inStockOnly={inStockOnly} setInStockOnly={setInStockOnly}/>
   <ProductTable filterText={filterText} inStockOnly={inStockOnly} Products={Products} />
   </>
  )
}

export default FilterableProductTable