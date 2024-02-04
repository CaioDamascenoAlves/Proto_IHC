import React, { useState } from "react";
import { Button, Card, CardMedia, Box, createTheme, ThemeProvider } from "@mui/material";

// Criação de um tema escuro
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffc107", // Este é o amarelo usado no botão
    },
  },
});

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setImage(null);
      setPreviewUrl("");
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
          <input
              accept="image/*"
              style={{ display: 'none' }}
              id="raised-button-file"
              multiple
              type="file"
              onChange={handleImageChange}
          />
          <label htmlFor="raised-button-file">
              <Button variant="contained" component="span" sx={{ mt: 2, mb: 2 }}>
                  Upload Image
              </Button>
          </label>
          {previewUrl && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 2 }}>
                  <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                          component="img"
                          height="140"
                          image={previewUrl}
                          alt="Uploaded image"
                      />
                  </Card>
              </Box>
          )}
      </div>
    </ThemeProvider>
);
};

export default ImageUpload;
