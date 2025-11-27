import React from "react";
import Weather from "./components/Weather";

const App = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://static-cse.canva.com/image/360/Stormy-Weather.dea6b535.png')"
      }}
    >
     
      <div className="absolute inset-0 bg-black/50"></div>

     
      <div className="relative z-10">
        <Weather />
      </div>
    </div>
  );
};

export default App;
