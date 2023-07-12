import { Grid } from "@mui/joy";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import MarketWatch from "./MarketWatch";
import TopTicker from "./TopTicker";

const Favourites = (props) => {
  const { user } = props;
  const navigate = useNavigate();

  


 
 

  return (
    <>
     
        <div className="top_tickers_container">
          <TopTicker
            ticker={{ name: "NIFTY 50", price: "18197.67", percentage: "0.51" }}
          />
          <TopTicker
            ticker={{
              name: "BANK NIFTY",
              price: "61167.45",
              percentage: "-3.51",
            }}
          />
        </div>
    
      <MarketWatch />
    </>
  );
};



export default Favourites;
