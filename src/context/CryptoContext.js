import { createContext, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// create context object
export const CryptoContext = createContext({});

// create the provider component
export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState();
  const [searchData, setSearchData] = useState();
  const [coinSearch, setCoinSearch] = useState("");

  const [currency, setCurrency] = useState("usd");
  const [sortBy, setSortBy] = useState("market_cap_desc");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(250);
  const [perPage, setPerPage] = useState(10);
  const [validCurrencies, setValidCurrencies] = useState([]);

  const [error, setError] = useState({ data: "", search: "" });
  const navigate = useNavigate();

  // fetching valid currencies from the api
  const fetchValidCurrencies = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/supported_vs_currencies"
      );
      const data = await response.json();
      setValidCurrencies(data);
    } catch (error) {
      console.log("Failed to fetch valid currencies", error);
    }
  };

  // Now checking is currency valid or not?
  const validateCurrency = (currency) => {
    if (!validCurrencies.includes(currency.toLowerCase())) {
      throw new Error(`Invalid currency code: ${currency}`);
    }
  };

  const getCryptoData = async () => {
    setError({ ...error, data: "" });
    setCryptoData();
    setTotalPages(14950);

    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
      )
        .then(async (res) => {
          if (res.ok) {
            return res.json();
          }
          let errorResponse = await res.json();
          setError({ ...error, data: errorResponse.error });
          throw new Error(errorResponse.error);
        })
        .then((json) => json);

      // console.log(data);
      setCryptoData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchResult = async (query) => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      )
        .then((res) => res.json())
        .then((json) => json);

      console.log("Search Data Result", data);
      setSearchData(data.coins);
    } catch (error) {
      console.log(error);
    }
  };

  const resetFunction = () => {
    setPage(1);
    setCoinSearch("");
  };
  const handleSetCurrency = (currency) => {
    try {
      validateCurrency(currency);
      setCurrency(currency);
    } catch (e) {
      navigate("/error", { state: { message: e.message } });
    }
  };

  useLayoutEffect(() => {
    fetchValidCurrencies();
  }, []);

  useLayoutEffect(() => {
    getCryptoData();
  }, [coinSearch, currency, sortBy, page, perPage]);
  return (
    <CryptoContext.Provider
      value={{
        cryptoData,
        searchData,
        getSearchResult,
        setCoinSearch,
        setSearchData,
        currency,
        setCurrency: handleSetCurrency,
        sortBy,
        setSortBy,
        page,
        setPage,
        totalPages,
        resetFunction,
        perPage,
        setPerPage,
        error,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
