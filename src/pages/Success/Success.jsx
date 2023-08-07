import { Link } from "react-router-dom";
import "./success.css";
const Success = () => {
  return (
    <div className="success__section">
      Booking Successfull Go to{" "}
      <Link to="/">
        <span>Home</span>
      </Link>
    </div>
  );
};

export default Success;
