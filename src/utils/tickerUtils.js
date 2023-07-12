export const getTickerClass = (ticker) => {
  const percentage = Number(ticker.percentage);
  if (percentage > 0) {
    return "ticker_positive";
  } else if (percentage < 0) {
    return "ticker_negative";
  } else {
    return "ticker_base";
  }
};

export const getTickerColor = (ticker) => {
  const percentage = Number(ticker.percentage);
  if (percentage > 0) {
    return "var(--ticker-positive-color)";
  } else if (percentage < 0) {
    return "var(red)";
  } else {
    return "var(--text-color)";
  }
};
