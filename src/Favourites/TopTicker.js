import { Typography } from "@mui/joy";


const TopTicker = (props) => {
  const { ticker } = props;
  return (
    <div className="top_ticker_container">
      <Typography
        variant="span"
        level="body3"
        whiteSpace="nowrap"
        marginRight="0.15em"
        fontWeight={600}
      >
        {ticker.name}
      </Typography>
      <Typography variant="span" level="body3" padding={0}>
        <Typography
          variant="span"
         
        >
          {ticker.price}
        </Typography>
        <Typography
          variant="span"
          opacity={0.7}
         
        >{`${ticker.percentage}%`}</Typography>
      </Typography>
    </div>
  );
};

export default TopTicker;
