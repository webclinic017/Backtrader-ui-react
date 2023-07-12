


import { getTickerClass, getTickerColor } from "../utils/tickerUtils";

const FavouriteTicker = (props) => {
  
  const { ticker } = props;

  const handleNewOrder = (orderType) => {
    // Handle new order logic here
  };

  return (
    <div className="favourite_ticker_container">
      <div className={`ticker_container ${getTickerClass(ticker)}`}>
        {ticker.name}
      </div>
      <div className="ticker_info_container">
        <div className={`ticker_percentage ${getTickerClass(ticker)}`}>
          {ticker.percentage}
        </div>
        
        <div className={`ticker_value ${getTickerClass(ticker)}`}>
          {ticker.price}
        </div>
        <div className="ticker_actions_container">
        <div className="actions_container">
          <div
            className="ticker_action_container action_bg_buy"
            style={{ marginRight: "0.5em",background:"red" }}
            onClick={() => handleNewOrder("BUY")}
          >
            B
          </div>
          <div
            className="ticker_action_container action_bg_sell"
            style={{ marginRight: "0.5em",background:"green" }}
            onClick={() => handleNewOrder("SELL")}
          >
            S
          </div>
         
        </div>
      </div>
      </div>

     
     
    </div>
  );
};


export default FavouriteTicker;
