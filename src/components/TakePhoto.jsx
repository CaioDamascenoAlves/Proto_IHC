import React, { useState, useRef, useEffect } from "react";
import { Button, Box, Modal } from "@mui/material";
import { useUserMedia } from "./useUserMedia";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "auto",
  maxWidth: "600px",
};

const TakePhotoButton = () => {
  const { stream, error } = useUserMedia({ video: true });
  const videoRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  const handleStartCamera = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    setOpen(false);
  };

  const handleTakePhoto = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const context = canvas.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    // Correção: Utilizando canvas.toDataURL() para contornar o problema com createObjectURL
    const photoDataUrl = canvas.toDataURL("image/png");
    setPhoto(photoDataUrl);

    // Oferece a foto para download diretamente sem criar um Blob
    const link = document.createElement("a");
    link.href = photoDataUrl;
    link.download = "photo.png"; // Define o nome do arquivo para download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (error) {
    return <div>Error accessing the camera: {error.toString()}</div>;
  }

  return (
    <Box textAlign="center" marginTop={2}>
      <Button variant="contained" onClick={handleStartCamera}>
        Iniciar Câmera
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          {stream && (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              style={{ width: "100%" }}
            />
          )}
          <Button variant="contained" onClick={handleTakePhoto} sx={{ mt: 2 }}>
            Tirar Foto
          </Button>
          <Button variant="contained" onClick={handleClose} sx={{ mt: 2 }}>
            Fechar
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default TakePhotoButton;
