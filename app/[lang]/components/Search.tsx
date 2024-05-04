import Button from "./Button";

function Search({ handleSort, val, handleInput }: searchProps) {
  return (
    <div className="flex my-[15px] gap-[20px] items-center justify-center">
      <input className="rounded-[10px] border border-gray-300 placeholder-text-gray-400 focus:outline-none text-[20px] py-[12px] px-[20px]" type="text" value={val} onChange={handleInput} placeholder="Search Product" />
      <Button handle={handleSort}>Sort by Price</Button>
      
    </div>
  );
}

export default Search;
