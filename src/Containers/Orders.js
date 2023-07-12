import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import StopIcon from "@mui/icons-material/Stop";
import PauseIcon from "@mui/icons-material/Pause";
import { styled } from "@mui/system";
import { connect } from "react-redux";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: "1px solid #fcfcfc",
}));

const Orders = (props) => {
  const columns = [
    { label: "Time", accessor: "time" },
    { label: "Type", accessor: "type" },
    { label: "Instrument", accessor: "Instrument" },
    { label: "Qty", accessor: "Qty" },
    { label: "Avgprice", accessor: "Avgprice" },
    { label: "status", accessor: "status" },
  ];

  return (
    <>
      <Box
        className="order_form"
        sx={{
          height: "88.5vh",
          background: "#FCFCFC",
          marginLeft: "3px",
          marginTop: "2px",
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell key={column.accessor}>
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody></TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setPaidSession: dispatch.user.setPaidSession,
  setActiveSessionType: dispatch.user.setActiveSessionType,
});
export default connect(mapStateToProps, mapDispatchToProps)(Orders);
