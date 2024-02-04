import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ImageUpload from "./ImgUpload";
import TakePhotoButton from "./TakePhoto";
// Criação de um tema escuro
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffc107",
    },
  },
});

const FormDenuncia = () => {
  const [denuncia, setDenuncia] = useState({
    localizacao: "",
    tipoAnimal: "",
    descricao: "",
    // Inclua mais campos conforme necessário
  });

  const handleChange = (event) => {
    setDenuncia({ ...denuncia, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implemente a lógica de submissão aqui
    console.log("Denúncia", denuncia);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          "& .MuiTextField-root": { margin: "8px 0" },
          "& .MuiButton-root": { margin: "16px 0" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Denúncia de Abandono de Animais
        </Typography>
        <TextField
          required
          name="localizacao"
          label="Localização"
          fullWidth
          variant="outlined"
          value={denuncia.localizacao}
          onChange={handleChange}
        />
        <TextField
          required
          name="tipoAnimal"
          label="Tipo de Animal"
          fullWidth
          variant="outlined"
          value={denuncia.tipoAnimal}
          onChange={handleChange}
        />
        <TextareaAutosize
          minRows={3}
          name="descricao"
          placeholder="Descrição da situação"
          style={{ width: "100%", margin: "8px 0", padding: "10px" }}
          value={denuncia.descricao}
          onChange={handleChange}
        />
        <ImageUpload />
        <TakePhotoButton />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Enviar Denúncia
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default FormDenuncia;
