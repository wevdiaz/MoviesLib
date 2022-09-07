import { useState, useEffect } from "react";

import { MovieCard } from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export function Home() {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
    console.log(data.results);
  }

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

    getTopRatedMovies(topRatedUrl);

  }, []);

  return (
    <div className="container">
        <h2>Melhores Filmes</h2>
        <div className="movies-container">
          { topMovies.length === 0 && <p>Carregando</p>}
          { topMovies.length > 0 && topMovies.map((movie) => (<MovieCard movie={movie} key={movie.id} />))  }    
        </div>
    </div>
  );
}