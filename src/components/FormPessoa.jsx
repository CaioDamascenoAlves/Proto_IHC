import React from "react";
import {
  createTheme,
  ThemeProvider,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  CssBaseline,
} from "@mui/material";

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
    return (
        <ThemeProvider theme={darkTheme}>
          <CssBaseline /> {/* Aplica o baseline do tema escuro para o background e cores de fonte */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 400,
              m: 'auto',
              p: 3,
              backgroundColor: darkTheme.palette.background.paper,
              borderRadius: 1,
              boxShadow: 3,
            }}
          >
            <h3>Cadastro Pessoa</h3>
            <ImageUpload />
            <TextField label="Nome" variant="outlined" margin="normal" />
            <TextField label="E-mail" variant="outlined" margin="normal" />
            <TextField label="Senha" type="password" variant="outlined" margin="normal" />
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <TextField label="CEP" variant="outlined" />
              <TextField label="Número" variant="outlined" />
            </Box>
            <TextField label="Rua" variant="outlined" margin="normal" />
            <TextField label="Cidade" variant="outlined" margin="normal" select SelectProps={{ native: true }}>
              {/* Adicione opções de cidade aqui */}
            </TextField>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Concordo com os Termos e Condições" sx={{ mt: 2 }} />
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Cadastrar
            </Button>
          </Box>
        </ThemeProvider>
      );
}

export default FormPessoa;
