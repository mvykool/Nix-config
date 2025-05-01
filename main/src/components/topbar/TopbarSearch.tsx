export const TopbarSearch = () => {
  return (
    <div className="bg-gray-800 flex items-center rounded-sm w-full h-full">
      <i className="bx bx-search-alt p-3"></i>
      <input
        type="search"
        placeholder="Search"
        className="outline-none border-none"
      />
    </div>
  );
};
