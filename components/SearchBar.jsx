const SearchBar = () => {
  return (
    <div className="col-span-12 md:col-span-3">
      <h3 className="font-bold text-xl">Search Recipes</h3>
      <ul className=" my-6 space-y-4 text-gray-500 text-sm">
        <input
          type="text"
          className="border p-2 rounded-sm w-4/5 "
          placeholder="search not implemented"
        />
        <br />
        <button className="py-2 px-4 bg-red-500 text-white rounded-sm">
          Search
        </button>
      </ul>
    </div>
  );
};

export default SearchBar;
