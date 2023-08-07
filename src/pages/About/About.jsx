import { useContext } from "react";
import { movie } from "../../Context";
import parse from "html-react-parser";
import "./about.css";
import { Link } from "react-router-dom";
const About = () => {
  const { selectedMovie } = useContext(movie);

  return (
    <div className="about__container">
      {selectedMovie.map((item, i) => {
        return (
          <div key={i} className="about_subsection">
            <img src={item.image} />
            <div className="right__section">
              <h2>{item.name}</h2>
              <p>{parse(item.summary)}</p>
              <Link to="/booking">
                <button>Book Now</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default About;
