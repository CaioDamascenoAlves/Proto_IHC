import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import credentials from "../credentials.json"; // Assegure-se de que o caminho esteja correto

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffc107",
    },
  },
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate(); // Utilizar o hook useNavigate

  const handleLogin = (event) => {
    event.preventDefault();
    const userExists = credentials.users.some(
      (user) => user.email === email && user.password === password
    );
    if (userExists) {
      setLoginStatus("success");
      setOpenSnackbar(true);
      navigate('/'); // Redirecionar para a rota '/'
    } else {
      setLoginStatus("error");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          "& .MuiTextField-root": { margin: "8px 0" },
          "& .MuiButton-root": { margin: "16px 0" },
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            required
            id="email"
            label="E-mail"
            type="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            id="password"
            label="Senha"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth >
            Entrar
          </Button>
        </form>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={loginStatus === "success" ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {loginStatus === "success"
            ? "Login bem-sucedido!"
            : "Erro ao entrar! Verifique suas credenciais."}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};

export default Login;
