import { useEffect, useState } from "react";
import Weather from "./Weather";
import useGeolocation from "../hooks/useGeolocation";

const Header = () => {
  const [weatherData, setWeatherData] = useState({});
  const location = useGeolocation();
  const {
    coordinates: { lat, lng },
  } = location;
  console.log(lat, lng);

  useEffect(() => {
    const checkWeather = async () => {
      try {
        const res = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${
            import.meta.env.VITE_API_KEY
          }`
        );

        const data = await res.json();
        setWeatherData(data);
      } catch (error) {
        console.log(error);
      }
    };
    checkWeather();
  }, [lat, lng]);

  return (
    <header className="bg-red-200 w-[900px] mx-auto p-8 flex justify-between">
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
