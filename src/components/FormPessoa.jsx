import React, { useState } from "react";
import {
  createTheme,
  ThemeProvider,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  CssBaseline,
  Snackbar,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ImageUpload from "./ImgUpload";

// Criação de um tema escuro
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffc107", // Este é o amarelo usado no botão
    },
  },
});

function FormPessoa() {
  // Estados para armazenar os valores dos campos do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [rua, setRua] = useState("");
  const [termos, setTermos] = useState(false);
  const [cidade, setCidade] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [cadastroStatus, setCadastroStatus] = useState("");
  const navigate = useNavigate(); // Para navegação

  // Função para lidar com o cadastro
  const handleCadastro = () => {
    // Aqui, você pode adicionar a lógica para validar os dados antes de salvar
    if (termos) {
      // Exemplo simples de validação
      const usuario = {
        nome,
        email,
        senha,
        endereco: { cep, numero, rua, cidade },
        termos,
      };
      localStorage.setItem("usuario", JSON.stringify(usuario));
      setCadastroStatus("success");
      setOpenSnackbar(true);
      setTimeout(() => navigate("/"), 600); // Redireciona após um breve delay para mostrar o Snackbar
      console.log(usuario);
    } else {
      setCadastroStatus("error");
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
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 400,
          m: "auto",
          p: 3,
          backgroundColor: darkTheme.palette.background.paper,
          borderRadius: 1,
          boxShadow: 3,
        }}
      >
        <h3>Cadastro Pessoa</h3>
        <ImageUpload />
        <TextField
          label="Nome"
          variant="outlined"
          margin="normal"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <TextField
          label="E-mail"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Senha"
          type="password"
          variant="outlined"
          margin="normal"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <TextField
            label="CEP"
            variant="outlined"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <TextField
            label="Número"
            variant="outlined"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </Box>
        <TextField
          label="Rua"
          variant="outlined"
          margin="normal"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
        />
        <TextField
          label="Cidade"
          variant="outlined"
          margin="normal"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        >
          {/* Adicione opções de cidade aqui */}
        </TextField>
        <FormControlLabel
          control={
            <Checkbox
              checked={termos}
              onChange={(e) => setTermos(e.target.checked)}
            />
          }
          label="Concordo com os Termos e Condições"
          sx={{ mt: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleCadastro}
        >
          Cadastrar
        </Button>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={cadastroStatus === "success" ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {cadastroStatus === "success"
            ? "Cadastro realizado com sucesso!"
            : "Erro ao cadastrar! Verifique os dados informados."}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default FormPessoa;
