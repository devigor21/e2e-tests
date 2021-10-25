import React, { FC } from 'react';

type SearchPoprs = {
  search: string;
  handleSearch: React.ChangeEventHandler<HTMLInputElement>
};

const Search: FC<SearchPoprs> = ({ handleSearch, search }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input
      type="text"
      id="search"
      name="search"
      value={search}
      onChange={handleSearch}
    />
  </div>
);

export default Search;
