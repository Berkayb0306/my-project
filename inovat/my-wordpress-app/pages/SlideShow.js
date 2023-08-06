import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const SlideShow = ({ images }) => {
  const sliderStyle = {
    width: '1500px', 
    maxWidth: '1800px', 
    margin: '0 auto', 
  };

  const slideContentStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageStyle = {
    maxWidth: 'auto',
    height: '850px',

  };

  return (
    <div style={sliderStyle}>
      <AwesomeSlider
        play={true}
        cancelOnInteraction={false}
        interval={3000} 
      >
        {images.map((image, index) => (
          <div key={index} style={slideContentStyle}>
            <img src={image} alt={`Slide ${index + 1}`} style={imageStyle} />
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default SlideShow;
