import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setcity] = useState("");
  const [weather, setweather] = useState("");
  const [temp, settemp] = useState("");
  const [desc, setdesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleCity(evt) {
    setcity(evt.target.value);
  }

  function getWeather() {
    setLoading(true);
    setError("");

    var weatherData = axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4a92e7924691ac8353e51a35560d73af&units=metric`
    );

    weatherData
      .then(function (success) {
        setweather(success.data.weather[0].main);
        setdesc(success.data.weather[0].description);
        settemp(success.data.main.temp);
      })
      .catch(() => setError("❌ City not found!"))
      .finally(() => setLoading(false));
  }

  return (
    <div
      className="relative bg-[#2C1A2F]/80 p-10 rounded-2xl w-[400px] 
      text-center shadow-2xl transform hover:scale-105 transition-all duration-500 
      overflow-hidden animate-[wiggle_1.5s_ease-in-out]"
    >

      {/* Mystic Fog Layer */}
      <div className="absolute inset-0 bg-gradient-to-b 
      from-transparent via-[#4A2C2A]/30 to-transparent blur-2xl 
      animate-[fog_6s_linear_infinite] pointer-events-none"></div>

      {/* Floating sparkles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#FFD75A] rounded-full animate-float"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDuration: 3 + Math.random() * 3 + "s",
            }}
          ></div>
        ))}

        {/* Meteor Shower */}
        <div className="absolute w-1 h-8 bg-gradient-to-b from-[#FFD75A] 
        to-transparent animate-[meteor_2.5s_linear_infinite] 
        left-[20%] top-[-10%]"></div>
      </div>

      {/* Extra Floating Emojis */}
      <div className="absolute text-4xl top-5 right-5 animate-[float-slow_4s_infinite]">
        ☁️
      </div>

      <div className="absolute text-4xl bottom-5 left-5 animate-[float-slow_4s_infinite]">
        ✨
      </div>

      {/* Title */}
      <h2 className="text-3xl font-extrabold mb-2 text-[#FFD75A] animate-bounce drop-shadow-lg">
        Mystic Skies 🌠
      </h2>

      <p className="text-[#FFEAA1] mb-5 italic animate-pulse">
        🌆 Your city, your enchanted forecast! ✨⚡
      </p>

      <input
        type="text"
        placeholder="Enter your City Name 🏙️"
        value={city}
        onChange={handleCity}
        className="p-3 w-4/5 border border-[#FFD75A] rounded-lg mb-4 
        text-[#FFEAA1] focus:ring-4 focus:ring-[#FFD75A] outline-none 
        hover:shadow-xl transition bg-white/20 backdrop-blur-md"
      />

      {/* Button */}
      <button
        onClick={getWeather}
        className="relative bg-gradient-to-r from-[#FFD75A] to-[#8B1C2C] 
        text-black font-bold py-2 px-5 rounded-lg hover:scale-110 
        hover:shadow-[0_0_25px_#FFD75A] transition transform active:scale-95
        before:absolute before:inset-0 before:bg-[#FFD75A]/20 
        before:blur-xl before:rounded-lg before:opacity-0 hover:before:opacity-100 
        before:transition-all"
      >
        ⚡ Get Report ⚡
      </button>

      {loading && (
        <p className="mt-4 text-[#FFD75A] animate-pulse text-lg">
          Fetching weather... ⏳🔥
        </p>
      )}

      {error && (
        <p className="mt-4 text-red-400 font-bold animate-shake">{error}</p>
      )}

      {/* Weather Box */}
      <div
        className="mt-6 text-left bg-white/10 p-5 rounded-xl backdrop-blur-md 
        shadow-lg hover:bg-white/20 hover:shadow-[0_0_30px_#FFD75A] 
        transition-all duration-500 relative animate-[flip_0.8s_ease-in-out]"
      >
        <p className="font-semibold text-lg text-[#FFD75A]">
          🌦️ Weather: <span className="text-[#FFEAA1]">{weather}</span>
        </p>
        <p className="font-semibold text-lg text-[#FFD75A]">
          🌡️ Temperature: <span className="text-[#FFEAA1]">{temp}°C</span>
        </p>
        <p className="font-semibold text-lg text-[#FFD75A]">
          📝 Description:{" "}
          <span className="capitalize text-[#FFEAA1]">{desc}</span>
        </p>

        <div className="absolute inset-0 rounded-xl border-2 border-[#FFD75A] 
        opacity-20 animate-[borderpulse_2s_infinite]"></div>
      </div>
    </div>
  );
}

export default Weather;
