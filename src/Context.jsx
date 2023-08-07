import { createContext, useState } from "react";

export const movie = createContext();
const Context = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState([
    { name: "", summary: "", image: "" },
  ]);
  return (
    <movie.Provider value={{ selectedMovie, setSelectedMovie }}>
      {children}
    </movie.Provider>
  );
};

export default Context;
