import RestaurantList from "./RestaurantList";
import { CountryCodes } from "../utils/constants";
import React, { useState } from "react";

interface MainPageProps {
  
}

const MainPage: React.FC<MainPageProps> = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState<number>(1); // Default to India (or any default country code)

  const handleChangeCountry = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountryCode(Number(event.target.value));
  };

  return (
    <div className="box-border">
      <div className="flex justify-end p-1 m-2">
        <div>
          {/* <select
            className="outline-none rounded-lg bg-black opacity-65 shadow-xl text-white"
            value={selectedCountryCode}
            onChange={handleChangeCountry}
          >
            {CountryCodes.map(({ code, name }) => (
              <option key={code} value={code}>
                {name}
              </option> */}
            <label className="mx-2">Select Country:</label>
        <select className="outline-none rounded-lg bg-black opacity-65 shadow-xl text-white" value={selectedCountryCode} onChange={handleChangeCountry}>
          <option value="">All Countries</option>
          {CountryCodes.map(({ code, name }) => (
            <option key={code} value={code}>{name}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <RestaurantList selectedCountryCode={selectedCountryCode} />
      </div>
    </div>
  );
};

export default MainPage;
