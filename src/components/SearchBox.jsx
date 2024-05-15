import React from 'react';

const SearchBox = ({ query, setQuery }) => {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="mb-5">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="text-xl p-2 border rounded-xl  w-full "
        placeholder="Search For Your Fav Movies..."
      />
    </div>
  );
};

export default SearchBox;
