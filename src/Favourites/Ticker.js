import { useEffect, useState } from "react";
import { getMockTickers } from "../../data/getMockTickers";

import Favourite from "../Favourites/Favourite";

const Ticker = () => {
  const [tickers, setTickers] = useState(getMockTickers());

  const getTickersList = () => {
    return tickers.map((ticker, index) => {
      return <Favourite ticker={ticker} key={index} />;
    });
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {getTickersList()}
      </div>
    </>
  );
};

export default Ticker;
