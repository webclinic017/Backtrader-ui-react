import React from "react";
import makeStyles from "@mui/styles/makeStyles/makeStyles";
import Header from "../Containers/Header";
const useStyles = makeStyles((theme) => ({
  space: {
    marginLeft:"3px",
  },
}));

const RightPaneItems=()=>{
  const classes = useStyles();
  return(  <>
  <div className={classes.space}>
  <Header/></div>
  </>);
};
export default RightPaneItems;