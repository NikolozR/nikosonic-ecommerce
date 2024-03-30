import Button from "./Button";

function Search({ handleSort }) {
  return (
    <div className="search-sort">
      <input type="text" placeholder="Search Product" />
      <Button onClick={handleSort}>Sort by Price</Button>
    </div>
  );
}

export default Search;
