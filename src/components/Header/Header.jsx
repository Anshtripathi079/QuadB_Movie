import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <span className="header__logo">
        <Link to="/"> QuadB Movies</Link>
      </span>
    </div>
  );
};

export default Header;
