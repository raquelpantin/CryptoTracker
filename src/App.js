import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Coin from "./components/Coin/Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        console.log(response.data);
        setCoins(response.data);
      })
      .catch((error) => console.log(error));
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) => {
    if (coin.name.toLowerCase().includes(search.toLowerCase())) {
      return true;
    } else if (coin.symbol.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }
  });

  return (
    <div className="crypto">
      <header className="crypto__header">
        <h1 className="crypto__header--title">Crypto Tracker</h1>
        <h2 className="crypto__subheader">Search a Currency</h2>
        <form className="crypto__header--form">
          <input
            className="crypto__header--search"
            type="text"
            placeholder="Search by Name or Ticker Symbol"
            onChange={handleChange}
          />
        </form>
      </header>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            image={coin.image}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}
          />
        );
      })}
    </div>
  );
}

export default App;
