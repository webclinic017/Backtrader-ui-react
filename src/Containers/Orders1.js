import React from "react";
import { Box, Grid } from "@mui/material";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Orders from "./Orders";

const Orders1 = () => {
  return (
    <Box style={{ height: "100vh" }}>
      <Header />
      <Orders  />
    </Box>
  );
};

export default Orders1;
