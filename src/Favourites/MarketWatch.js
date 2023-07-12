
import { Tab, TabList, Tabs,  } from "@mui/joy";
import { TextField } from "@mui/material";
import { useState } from "react";
import FavoriteList from "./FavouriteList";

const MarketWatch = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabChange = (e, value) => {
    setSelectedTab(value);
  };

  return (
    <div className="favourite_container">
    <div className="favourite_input">
      <TextField fullWidth
        placeholder="Search eg: infy, nifty weekly"
      
      />
    </div>
    <div className="favourite_content">
      <FavoriteList selectedFavorite={selectedTab} />
    </div>
    <div className="favourite_tabs">
      <Tabs
        defaultValue={selectedTab}
        onChange={(e, value) => handleTabChange(e, value)}
      >
        <TabList variant="outlined" size="sm">
          <Tab value={1}>1</Tab>
          <Tab value={2}>2</Tab>
          <Tab value={3}>3</Tab>
          <Tab value={4}>4</Tab>
          <Tab value={5}>5</Tab>
          <Tab value={6}>6</Tab>
          <Tab value={7}>7</Tab>
        </TabList>
      </Tabs>
    </div>
  </div>
  );
};

export default MarketWatch;
