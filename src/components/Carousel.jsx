import { useState } from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

const Carousel = ({ images, carouselText, tipo }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="500"
        image={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {carouselText[currentImageIndex]}
        </Typography>
        <Button onClick={handlePrev} disabled={images.length === 1}>
          Anterior
        </Button>
        {tipo === "alerta" ? (
          <Button disable style={{color: "red", marginLeft: "5vw", marginRight: "5vw"}}><strong>CUIDADO</strong></Button>
        ) : (
          <Button style={{color: "green", marginLeft: "5vw", marginRight: "5vw"}}><strong>ADOTAR</strong></Button>
        )}
        <Button onClick={handleNext} disabled={images.length === 1}>
          Próximo
        </Button>

      </CardContent>
    </Card>
  );
};

export default Carousel;