import { useEffect, useState } from "react";
import Weather from "./Weather";
import useGeolocation from "../hooks/useGeolocation";
import Search from "./Search";

const Header = () => {
  const [weatherData, setWeatherData] = useState({});
  const [query, setQuery] = useState("");
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
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl">Today checklist⛅</h1>
        <Search
          query={query}
          setQuery={setQuery}
          setWeatherData={setWeatherData}
        />
      </div>

      {weatherData.weather && <Weather weatherData={weatherData} />}
    </header>
  );
};

export default Header;
