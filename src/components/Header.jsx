import { useEffect, useState } from "react";
import Weather from "./Weather";

const Header = () => {
  const [weatherData, setWeatherData] = useState({});

  const checkWeather = async () => {
    try {
      const res = await fetch(
        // eslint-disable-next-line no-undef
        `https://api.openweathermap.org/data/2.5/weather?q=johannesburg&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const data = await res.json();
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkWeather();
  }, []);

  console.log(weatherData);

  return (
    <header className="bg-red-200 w-[900px] p-8 flex justify-between ">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl">Today checklist⛅</h1>
        <input
          type="text"
          className="py-1 px-4 rounded-xl w-[350px]  focus:outline-none focus:ring-2 focus:ring-yellow-400 border-none"
          placeholder="Enter today's location"
        />
      </div>

      {weatherData.weather && <Weather weatherData={weatherData} />}
    </header>
  );
};

export default Header;