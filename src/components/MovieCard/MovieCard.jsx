import { useContext, useEffect } from "react";
import "./moviecard.css";
import { movie } from "../../Context";
import { Link } from "react-router-dom";

const MovieCard = ({ name, image, language, status, summary }) => {
  const { selectedMovie, setSelectedMovie } = useContext(movie);
  const handleClick = () => {
    setSelectedMovie([{ name: name, image: image, summary: summary }]);
  };
  return (
    <div className="movie__card">
      <span>{status}</span>
      {image ? (
        <img src={image} alt="movie" />
      ) : (
        <img
          src="https://resizing.flixster.com/UNHdUzvufH-sG2Zz5b3Go7GD_pg=/206x305/v2/https://flxt.tmsimg.com/assets/p9635334_p_v13_ak.jpg"
          alt="movie"
        />
      )}

      <p>{name}</p>
      <p>{language}</p>
      <Link to="/about">
        <button onClick={handleClick}>View</button>
      </Link>
    </div>
  );
};

export default MovieCard;
