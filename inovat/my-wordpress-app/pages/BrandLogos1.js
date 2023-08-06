import React from 'react';

const logos = [
    '/images/logo1.png',
    '/images/logo2.png',
    '/images/logo3.png',
    '/images/logo4.png',
    '/images/logo5.png',
];

function BrandLogos() {
 
  const [hoveredIndex, setHoveredIndex] = React.useState(null);


  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {}
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Logo ${index + 1}`}
          style={{
            width: '100px',
            height: '100px',
            margin: '40px',
            
            filter: hoveredIndex === index ? 'brightness(70%)' : 'none',
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
}

export default BrandLogos;
