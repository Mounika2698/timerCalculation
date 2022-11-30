import React, { useState } from "react";
import { Button, Card, TextField, Typography, Snackbar } from "@mui/material";
import axios from "axios";

const TimerCalculationApp = () => {
  const [state, setState] = useState("");
  const [open, setOpen] = useState(false);
  const [timerValue, setTimerValue] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleSubmit = () => {
    const beforeCall = Date.now();
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        console.log(res.data);
      })
      .then((data) => {
        var afterCall= Date.now();
        var finalTimeSpent=(afterCall-beforeCall)/1000+"secs";
        setTimerValue(finalTimeSpent);
        setOpen(true);
      });
  };

  return (
    <>
      <Snackbar open={open} onClose={handleClose} message={timerValue } />
      <Card sx={{ width: "70vh", marginLeft: "69vh" }}>
        <Typography>Timer Calculation</Typography>
        <br />
        <TextField
          label="Enter value"
          onChange={(e) => setState(e.target.value)}
          value={state}
        />{" "}
        <br />
        <br />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
        <br />
        <br />
      </Card>
    </>
  );
};

export default TimerCalculationApp;
