import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  TextareaAutosize,
  Snackbar,
  Alert,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ImageUpload from "./ImgUpload";
import CameraButton from "./TakePhoto";
import { useNavigate } from "react-router-dom";

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
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [severity, setSeverity] = useState("info");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setDenuncia({ ...denuncia, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar validações antes de salvar
    if (denuncia.localizacao && denuncia.tipoAnimal && denuncia.descricao) {
      // Supondo que tudo está validado
      localStorage.setItem("denuncia", JSON.stringify(denuncia));
      setFeedbackMessage("Denúncia enviada com sucesso!");
      setSeverity("success");
      setOpenSnackbar(true);
      setTimeout(() => navigate("/"), 600); // Redireciona após exibir a mensagem de sucesso
    } else {
      setFeedbackMessage("Por favor, preencha todos os campos obrigatórios.");
      setSeverity("error");
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
        <CameraButton />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Enviar Denúncia
        </Button>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {feedbackMessage}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};

export default FormDenuncia;
