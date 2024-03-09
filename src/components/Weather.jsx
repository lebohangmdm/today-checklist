/* eslint-disable react/prop-types */

const now = new Date();
const day = Intl.DateTimeFormat("en-ZA", {
  day: "2-digit",
  month: "long",
  weekday: "short",
}).format(now);

const Weather = ({ weatherData }) => {
  const icon = weatherData.weather[0].icon;

  return (
    <div className="flex flex-col">
      <h2>
        {day} || {weatherData.name}, {weatherData.sys.country}
      </h2>
      <div className="flex items-center gap-x-4">
        <div className="space-y-1">
          <h1 className="text-4xl text-yellow-600 ">
            {weatherData.main.temp.toFixed()}°C
          </h1>
          <p>{weatherData.weather[0].description}</p>
        </div>
        <div>
          <img
            className="block w-36"
            src={` https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Weather;
