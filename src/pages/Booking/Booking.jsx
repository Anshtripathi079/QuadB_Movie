import { useContext, useState, useEffect } from "react";
import "./booking.css";
import { movie } from "../../Context";
import { Link } from "react-router-dom";

const Booking = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const getName = (e) => {
    setInputName(e.target.value);
  };
  const getEmail = (e) => {
    setInputEmail(e.target.value);
  };
  const handleSubmit = () => {
    localStorage.setItem("name", JSON.stringify(inputName));
    localStorage.setItem("email", JSON.stringify(inputEmail));
  };

  const { selectedMovie } = useContext(movie);
  return (
    <div className="booking__section">
      <h2>{selectedMovie[0].name}</h2>
      <div className="booking__form">
        <div className="data__inputs">
          <input
            type="text"
            required
            value={inputName}
            placeholder="Enter name"
            onChange={getName}
          />

          <input
            type="email"
            value={inputEmail}
            required
            placeholder="Enter email"
            onChange={getEmail}
          />
        </div>
        <p>Select Payment Method</p>
        <div className="radios">
          <input type="radio" id="upi" name="payment" />
          <label htmlFor="upi">UPI</label>
          <input type="radio" id="card" name="payment" />
          <label htmlFor="card">CARD</label>
        </div>
        <Link to="/success">
          <button onClick={handleSubmit}>Book</button>
        </Link>
      </div>
    </div>
  );
};

export default Booking;
