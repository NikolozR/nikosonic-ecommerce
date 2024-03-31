import Button from "./Button";

function Search({ handleSort, val, handleInput }) {
  return (
    <div className="search-sort">
      <input type="text" value={val} onChange={handleInput} placeholder="Search Product" />
      <Button onClick={handleSort}>Sort by Price</Button>
    </div>
  );
}

export default Search;
