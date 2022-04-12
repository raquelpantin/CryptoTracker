import "./Coin.scss";
import React from "react";

const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
}) => {
  return (
    <div className="coin__container">
      <div className="coin__card-top">
        <img className="coin__img" src={image} alt="logo" />
        <h1 className="coin__name">{name}</h1>
        <p className="coin__symbol">{symbol}</p>
      </div>
      <div className="coin__list-container">
        <ul className="coin__list">
          <li className="coin__list-item">Price</li>
          <li className="coin__list-item">Vol</li>
          <li className="coin__list-item">24h %</li>
          <li className="coin__list-item">Mkt Cap</li>
        </ul>
        <div className="coin__card-bottom">
          <p className="coin__price">${price.toLocaleString()}</p>
          <p className="coin__volume">${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p>
              {priceChange.toFixed(2)}%{" "}
              <span className="coin__price-change--red">▼</span>
            </p>
          ) : (
            <p>
              {priceChange.toFixed(2)}%{" "}
              <span className="coin__price-change--green">▲</span>
            </p>
          )}
          <p className="coin__market-cap">${marketCap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
