import React, { useContext, useRef, useState } from "react";
import submitIcon from "../assets/submit-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
import selectIcon from "../assets/select-icon.svg";
import Search from "./Search";

const Filters = () => {
  const { setCurrency, setSortBy, resetFunction, error } =
    useContext(CryptoContext);
  const currencyRef = useRef(null);

  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    const val = currencyRef.current.value;
    setCurrency(val);
    currencyRef.current.value = "";
  };

  const handleSort = (e) => {
    const val = e.target.value;
    setSortBy(val);
  };

  return (
    <div className="w-full p-3 lg:border-2 lg:border-gray-100 rounded-lg flex flex-col xl:flex-row items-start md:items-center">
      <div className="w-full lg:w-[50%] mb-4 xl:mb-0">
        <Search />
      </div>
      <div className="flex flex-col sm:flex-row gap-0 lg:gap-6">
        <form
          className="flex mb-4 sm:mb-0 sm:mr-6"
          onSubmit={handleCurrencySubmit}
        >
          <label htmlFor="currency" className="text-base mr-2 mt-1 font-bold">
            Currency:
          </label>
          <input
            type="text"
            name="currency"
            ref={currencyRef}
            placeholder="usd"
            className="w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan leading-4"
          />

          <button type="submit" className="ml-2">
            <img src={submitIcon} alt="submit" className="w-4 h-4" />
          </button>
        </form>
        <div className="flex gap-3">
          <label className="flex relative justify-center items-center">
            <span
              htmlFor="sortby"
              className="text-sm md:text-base mr-2 font-bold"
            >
              Sort by:
            </span>
            <select
              name="sortby"
              className="rounded bg-gray-200 text-base
              pl-2 pr-10 py-1 leading-4 capitalize focus:outline-0"
              onClick={handleSort}
              style={{ appearance: "none" }}
            >
              <option value="market_cap_desc">Market Cap Desc</option>
              <option value="market_cap_asc">Market Cap Asc</option>
              <option value="volume_desc">Volume Desc</option>
              <option value="volume_asc">Volume Asc</option>
              <option value="id_desc">ID Desc</option>
              <option value="id_asc">ID Asc</option>
            </select>
            <img
              src={selectIcon}
              alt="submit"
              className="w-[1rem] h-auto
            absolute right-1 top-2 pointer-events-none
            "
            />
          </label>

          <button
            className="w-[2rem] ml-3 hover:scale-110 transition-all transition-ease
          relative right-0 top-0
          "
            onClick={resetFunction}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              className="w-full h-full fill-cyan"
              style={{
                msTransform: "rotate(360deg)",
                WebkitTransform: "rotate(360deg)",
                transform: "rotate(360deg)",
              }}
              viewBox="0 0 24 24"
            >
              <path d="M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3-3 1.331-3 3 1.329 3 3 3z" />
              <path d="M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219 9.053 9.053 0 0 0-2.43-2.43 8.95 8.95 0 0 0-3.219-1.355 9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053 7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725 7.11 7.11 0 0 1-.644 1.188 7.2 7.2 0 0 1-.858 1.039 7.028 7.028 0 0 1-3.536 1.907 7.13 7.13 0 0 1-2.822 0 6.961 6.961 0 0 1-2.503-1.054 7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034 9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183 9.014 9.014 0 0 0 3.218-1.355 8.886 8.886 0 0 0 1.331-1.099 9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814z" />
              <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
