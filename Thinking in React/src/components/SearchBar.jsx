const SearchBar = ({filterText, changeFilterText, inStockOnly, setInStockOnly}) => {
  return (
    <form>
      <div>
        <input type="text" placeholder="Search..." value={filterText} onChange={(e) => changeFilterText(e.target.value)} />
      </div>
      <div>
        <label htmlFor="">
          <input type="checkbox" name="stknot" id=""  checked={inStockOnly} onChange={(e) => setInStockOnly(e.target.checked)} /> Only show products in
          stock
        </label>
      </div>
    </form>
  );
};

export default SearchBar;
