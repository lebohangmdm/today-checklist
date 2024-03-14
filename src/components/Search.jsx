import { useState } from "react";

const Search = ({ setWeatherData, setIsLoading }) => {
  const [query, setQuery] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (query.length < 3) return;
    console.log(query);
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );

      // if (!res.ok)
      //   throw new Error("We cannot find the weather data for this location");

      const data = await res.json();
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setQuery("");
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="py-2 px-4 rounded-xl w-[350px]  focus:outline-none focus:ring-2 focus:ring-yellow-400 border-none"
        placeholder="Enter your location today"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default Search;
