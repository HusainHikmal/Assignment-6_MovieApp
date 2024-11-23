import { useState } from "react";
import Movies from "./Movies";
import SearchFilm from "./Search";

const Header = () => {

  const [query, setQuery] = useState("thor");

  const handleSearch = (newQuery) => {
    setQuery(newQuery); // Update query dengan input baru
  };

  return (
  
    <div>
    <SearchFilm onSearch={handleSearch} />
    <Movies title={query} />
  </div>
  );
};

export default Header;
