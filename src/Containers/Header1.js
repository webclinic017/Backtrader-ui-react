import React from "react";
import { Box, Grid } from "@mui/material";
import Header from "./Header";
import Dashboard from "./Dashboard";

const Header1 = () => {
  return (
    <Box style={{ height: "100vh" }}>
      <Header />
      <Dashboard />
    </Box>
  );
};

export default Header1;
