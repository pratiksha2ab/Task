import { Button, Grid, Paper, TextField } from "@mui/material";
import React from "react";
import Twitter from "@mui/icons-material/Twitter";

function LogIn() {
  const paperStyle = {
    padding: "15px",
    height: "fit-content",
    width: 350,
    margin: "20px auto",
  };

  const btnstyle = {
    margin: "8px 0",
    padding: "10px",
  };

  const twitterStyle = {
    marginTop: 24,
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };

  const twitterBtn = {
    textColor: "white",
    letterSpacing: "1px",
    display: "flex",
    alignItems: "center",
    fontWeight: 600,
    padding: 10,
    borderRadius: 12,
    backgroundColor: "#00Acee",
    color: "white",
    border: "none",
    width: 250,
    justifyContent: "center",
    gap: 8,
  };

  return (
    <Grid>
      <Paper elevation={5} style={paperStyle}>
        <h2>Login</h2>

        <Grid container rowSpacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Username"
              placeholder="Enter username"
              variant="outlined"
              fullWidth
              required
              padding="10px"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              Login
            </Button>
          </Grid>

          <div style={twitterStyle}>
            <button
              color="primary"
              style={twitterBtn}
              onClick={() => {
                window.open("http://localhost:4000/auth/twitter", "_self");
              }}
            >
              <Twitter height="10px" width="10px" />
              Login With Twitter
            </button>
          </div>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default LogIn;
