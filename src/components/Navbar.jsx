import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/" >MoviesLib</Link>
      </h2>

      <p>
        <Link to="movie/1">Movies</Link>
      </p>
      <p>
        <Link to="search">Search</Link>
      </p>
    </nav>
  );
}