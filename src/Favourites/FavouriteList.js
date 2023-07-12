import { useEffect, useState } from "react";
import { getMockTickers } from "../data/GetMockTickers";
import EmptyFavourite from "./EmptyFavourite";
import FavouriteTicker from "./FavouriteTicker";

const FavoriteList = (props) => {
  const { selectedFavorite } = props;
  const [tickers, setTickers] = useState(getMockTickers());

  useEffect(() => {
    if (selectedFavorite) {
   
    }
  }, [selectedFavorite]);

  const getTickersList = () => {
    return tickers.map((ticker, index) => {
        return <FavouriteTicker ticker={ticker} key={index} />;
    });
  };
  const getFavouriteEmptyContent = () => {
    return <EmptyFavourite />;
  };

  return (
    <>
      {tickers.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {getTickersList()}
        </div>
      ) : (
        getFavouriteEmptyContent()
      )}
    </>
  );
};

export default FavoriteList;
