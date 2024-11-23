import { useEffect, useState } from "react";

const Movies = ({title}) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const [query, setQuery] = useState("thor");


  useEffect(() => {
    const fetchMovie = async () => {
      const apiKey = import.meta.env.VITE_OMDB_APIKEY;
      const url = `https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`;

      setLoading(true);
      setError("");

      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setError(data.Error);
        }
      } catch (e) {
        setError("Error Fetching Data: " + e.message);
      } finally {
        setLoading(false); // Set loading false setelah fetch selesai
      }
    };
    fetchMovie();
  }, [title]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.length > 3 ? (
          movies.map((movie, index) => (
            <div
              key={index}
              className="shadow-xl p-2 rounded-xl bg-slate-100 cursor-pointer"
            >
              <div className="p-2 flex flex-col bg-slate-50">
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/200"
                  }
                  className="rounded-md"
                  alt={movie.Title}
                />
                <span className="bg-slate-100 mt-3 text-blue-400 font-mono text-xs text-center">
                  {movie.Title}
                </span>
              </div>
            </div>
          ))
        ) : (
          <h2>No Movies Found</h2>
        )}
      </div>
    </>
  );
};

export default Movies;
