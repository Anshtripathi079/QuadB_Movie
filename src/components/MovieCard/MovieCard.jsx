import { useContext, useEffect } from "react";
import "./moviecard.css";
import { movie } from "../../Context";
import { Link } from "react-router-dom";

const MovieCard = ({ name, image, language, status, summary }) => {
  const { selectedMovie, setSelectedMovie } = useContext(movie);
  const handleClick = () => {
    console.log(name);
    setSelectedMovie([{ name: name, image: image, summary: summary }]);
  };
  return (
    <div className="movie__card">
      <span>{status}</span>
      <img src={image} alt="movie" />

      <p>{name}</p>
      <p>{language}</p>
      <Link to="/about">
        <button onClick={handleClick}>View</button>
      </Link>
    </div>
  );
};

export default MovieCard;
