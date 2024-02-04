import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Criação de um tema escuro
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffc107',
    },
  },
});

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        // Implemente a lógica de login aqui
        console.log('Login', { email, password });
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    '& .MuiTextField-root': { margin: '8px 0' },
                    '& .MuiButton-root': { margin: '16px 0' },
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
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Entrar
                    </Button>
                </form>
            </Box>
        </ThemeProvider>
    );
};

export default Login;
