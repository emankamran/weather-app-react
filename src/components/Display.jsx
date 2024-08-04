import React from "react";
import {
  faSun,
  faCloud,
  faCloudSun,
  faCloudShowersHeavy,
  faSnowflake,
  faBolt,
  faSmog,
  faMoon,
  faCloudMoon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Display = (props) => {
  const getWeatherIcon = (iconCode) => {
    switch (iconCode) {
      case "01d":
        return faSun;
      case "01n":
        return faMoon;
      case "02d":
        return faCloudSun;
      case "02n":
        return faCloudMoon;
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        return faCloud;
      case "09d":
      case "09n":
      case "10d":
      case "10n":
        return faCloudShowersHeavy;
      case "11d":
      case "11n":
        return faBolt;
      case "13d":
      case "13n":
        return faSnowflake;
      case "50d":
      case "50n":
        return faSmog;
      default:
        return null;
    }
  };
  console.log(props);

  const { name, weather, main } = props.apidata;

  return (
    <div className="mt-5">
      {main ? (
        <table className="table-auto w-full ">
          <thead className="text-gray-800">
            <tr>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">Weather</th>
              <th className="px-4 py-2">Temperature (F)</th>
              <th className="px-4 py-2">Feels Like (F)</th>
              <th className="px-4 py-2">Humidity</th>
            </tr>
          </thead>

          <tbody className="">
            <tr>
              <td className="border px-4 py-2 ">{name}</td>
              <td className="border px-4 py-2">
                {weather && (
                  <>
                    <FontAwesomeIcon
                      icon={getWeatherIcon(weather[0].icon)}
                      size="lg"
                      className="mr-2"
                    />
                    {weather[0].description}
                  </>
                )}
              </td>

              <td className="border px-4 py-2">
                {main && Math.round((main.temp - 273.15) * 1.8 + 32)}
              </td>
              <td className="border px-4 py-2">
                {main && Math.round((main.feels_like - 273.15) * 1.8 + 32)}
              </td>
              <td className="border px-4 py-2">
                {main && `${main.humidity}%`}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <h1 className="text-gray-800 text-2sm text-center l">
          No data available
        </h1>
      )}
    </div>
  );
};

export default Display;
