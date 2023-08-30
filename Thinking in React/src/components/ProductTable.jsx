import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ Products, filterText, inStockOnly }) => {
  const rows = [];
  let lastCategory = null;

  Products.forEach((element) => {

    console.log(element.name.toLowerCase().indexOf(""));
    
    if (element.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    if (inStockOnly && !element.stocked) {
      return;
    }

    if (element.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          key={element.category}
          category={element.category}
        />
      );
    }
    rows.push(<ProductRow key={element.name} product={element} />);
    lastCategory = element.category;
  });

  return (
    <div>
      <h1>
        <span>name</span> <span>price</span>
      </h1>
      <div>{rows}</div>
    </div>
  );
};

export default ProductTable;
