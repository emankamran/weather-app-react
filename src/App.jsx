import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Display from "./components/Display";
import bgImage from "./assets/clouds.jpg";
function App() {
  const [text, setText] = useState("");
  const [apidata, setData] = useState([]);

  const apiKey = "dd71186a65a28e9af2e3443edd3ea1a3";

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiKey}`
    );
    const data = await res.json();

    setData(data);
  };

  return (
    <div
      className=" bg-cover  flex flex-col items-center justify-center min-h-screen  bg-blue-300"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h3 className=" mr-2 text-white text-2xl text-center font-semibold">
        Weather App
      </h3>
      <div className="flex">
        <input
          type="text"
          placeholder="Search City"
          className=" text-black mt-2 placeholder:text-slate-500 pl-2 py-1 focus:outline-none focus:ring ring-blue-700 rounded-xl ml-12"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          value="Submit"
          onClick={fetchData}
          className="ml-5 bg-blue-600 px-4 py-2 rounded-md text-white"
        >
          Go
        </button>
      </div>

      <Display apidata={apidata} />
    </div>
  );
}

export default App;
