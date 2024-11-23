import { useState } from "react";
const SearchFilm = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onSearch(input); 
  };

  return (
    <div className="bg-blue-500 flex flex-row justify-between p-5">
      <a href="/" className="text-2xl font-serif font-semibold">
        Film Pro
      </a>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          className="w-full me-3 py-1 px-3 rounded-md"
          placeholder="Search Your Fav Movie"
        />
        <button
          type="submit"
          className="font-mono text-base bg-white px-3 py-1 rounded-md border-[3px] border-lime-400"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchFilm;
