import React, { useState, useRef } from 'react';
import { Button } from '@mui/material';

const TakePhotoButton = () => {
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(mediaStream);
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      const { videoWidth, videoHeight } = videoRef.current;

      // Set canvas size to the size of the video.
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Draw the video frame to the canvas.
      context.drawImage(videoRef.current, 0, 0, videoWidth, videoHeight);

      // Create a data URL from the canvas image.
      const imageDataUrl = canvasRef.current.toDataURL('image/png');

      // Create a link element, set the filename and download.
      const link = document.createElement('a');
      link.href = imageDataUrl;
      link.download = 'photo.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Effect to assign the stream to the video element
  React.useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div>
      <Button variant="contained" onClick={startCamera}>
        Iniciar Câmera
      </Button>
      {stream && (
        <div>
          <video ref={videoRef} autoPlay playsInline style={{ width: "100%" }} />
          <Button variant="contained" onClick={takePhoto} style={{ marginTop: '10px' }}>
            Tirar Foto
          </Button>
          <Button variant="contained" onClick={stopCamera} style={{ marginTop: '10px' }}>
            Parar Câmera
          </Button>
        </div>
      )}
      {/* Hidden canvas element */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default TakePhotoButton;
