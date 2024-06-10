import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Container,
  Box,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PropTypes from "prop-types";
import "./Login.css";

function Login({ onLogin }) {
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const rememberMe = data.get("remember") === "on";
    onLogin(email, password, rememberMe);
  };

  return (
    <Container component="main" maxWidth="xs" className="container">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className="typography">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate className="form">
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="UserName"
            name="email"
            autoComplete="email"
            autoFocus
            className="textfield"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            className="textfield"
          />
          <FormControlLabel
            control={<Checkbox name="remember" color="primary" />}
            label="Remember me"
            className="checkbox"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="button"
          >
            Tizimga kirish
          </Button>
          <Grid container>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;

