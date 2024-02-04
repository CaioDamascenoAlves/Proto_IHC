import React from "react";
import { Box, Typography, Button, Container, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import minhaImagem from "../assets/Abandonado-Feliz.webp"; // Ajuste o caminho para a localização da sua imagem
import { Link } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffc107",
    },
  },
});

const Home = () => {
  const imageSize = {
    width: "50%", // ou um valor específico como '300px'
    height: "auto", // mantém a proporção da imagem
    maxWidth: "600px", // limite máximo da largura
    maxHeight: "auto", // ou um valor específico como '400px'
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="md">
        <Paper elevation={3} sx={{ my: 4, p: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Junte-se a Nós na Luta Contra o Abuso de Animais
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "& img": { maxWidth: "100%", height: "auto", marginBottom: 2 },
            }}
          >
            <img
              src={minhaImagem}
              alt="Cão triste em ambiente negligenciado"
              style={imageSize}
            />{" "}
          </Box>
          <Typography variant="body1" sx={{ my: 2 }}>
            Todos os dias, inúmeros animais sofrem em silêncio, vítimas do
            abandono e da crueldade. Mas juntos, podemos dar-lhes uma voz.
            Denunciar maus-tratos é mais do que um ato de compaixão, é um dever
            de todos nós. E para aqueles que têm um lugar em seus corações e
            lares, considerem adotar um desses seres amorosos e leais. Cada
            animal merece uma segunda chance em um lar seguro e amoroso. Faça a
            diferença hoje.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ mr: 1 }}
              component={Link}
              to="/denunciar"

            >
              Denunciar Abuso
            </Button>
            <Button variant="outlined" color="primary">
              Adotar um Pet
            </Button>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
