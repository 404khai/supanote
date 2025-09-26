// import React, { useState } from 'react';
// import framer from '../assets/images/framer.png';
// import notion from '../assets/images/notion.png';
// import slack from '../assets/images/slack.png';
// import zoom from '../assets/images/zoom.png';
// import paypal from '../assets/images/paypal.png';
// import zapier from '../assets/images/zapier.png';
// import stripe from '../assets/images/stripe.png';
// import googleCloud from '../assets/images/googleCloud.png';
// import webflow from '../assets/images/webflow.png';

// const InfiniteMarqueeSlider = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const images = [
//     framer,
//     notion,
//     slack,
//     zoom,
//     paypal,
//     zapier,
//     stripe,
//     googleCloud,
//     webflow,
//   ];

//   const handleMouseEnter = (index) => setHoveredIndex(index);
//   const handleMouseLeave = () => setHoveredIndex(null);

//   return (
//     <div>
//       <style>
//         {`
//           @keyframes marquee {
//             0% {
//               transform: translateX(0);
//             }
//             100% {
//               transform: translateX(-50%);
//             }
//           }

//           .marquee-container {
//             width: 100%;
//             overflow: hidden;
//             position: relative;
//             background-color: transparent;
//             display: flex;
//             align-items: center;
//             padding: 20px 0;
//           }

//           .marquee-wrapper {
//             display: flex;
//             gap: 40px;
//             animation: marquee 25s linear infinite;
//           }

//           .marquee-wrapper.paused {
//             animation-play-state: paused;
//           }

//           .image-container {
//             flex-shrink: 0;
//             transition: all 0.3s ease;
//             cursor: pointer;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//           }

//           .marquee-image {
//             width: 200px;
//             max-width: 25vw; /* responsive width */
//             height: auto;
//             object-fit: contain;
//             transition: all 0.3s ease;
//           }

//           /* Hover effects */
//           .image-container.hovered .marquee-image {
//             transform: scale(1.1);
//           }
//           .image-container.dimmed .marquee-image {
//             opacity: 0.3;
//           }
//           .image-container.normal .marquee-image {
//             opacity: 1;
//           }

//           /* 📱 Mobile responsiveness */
//           @media (max-width: 1024px) {
//             .marquee-image {
//               max-width: 30vw;
//             }
//           }
//           @media (max-width: 768px) {
//             .marquee-image {
//               max-width: 40vw;
//             }
//           }
//           @media (max-width: 480px) {
//             .marquee-image {
//               max-width: 60vw;
//             }
//             .marquee-wrapper {
//               gap: 20px;
//               animation-duration: 20s;
//             }
//           }
//         `}
//       </style>

//       <div className="marquee-container">
//         <div
//           className={`marquee-wrapper ${hoveredIndex !== null ? 'paused' : ''}`}
//         >
//           {/* Duplicate for seamless loop */}
//           {[...images, ...images].map((src, index) => (
//             <div
//               key={index}
//               className={`image-container ${
//                 hoveredIndex !== null
//                   ? hoveredIndex === index
//                     ? 'hovered'
//                     : 'dimmed'
//                   : 'normal'
//               }`}
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <img src={src} alt={`Slide ${index + 1}`} className="marquee-image" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InfiniteMarqueeSlider;


import React, { useState } from 'react';
import framer from '../assets/images/framer.png'
import notion from '../assets/images/notion.png'
import slack from '../assets/images/slack.png'
import zoom from '../assets/images/zoom.png'
import paypal from '../assets/images/paypal.png'
import zapier from '../assets/images/zapier.png'
import stripe from '../assets/images/stripe.png'
import googleCloud from '../assets/images/googleCloud.png'
import webflow from '../assets/images/webflow.png'

const InfiniteMarqueeSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Sample images - replace with your own
    const images = [
    framer,
    notion,
    slack,
    zoom,
    paypal,
    zapier,
    stripe,
    googleCloud,
    webflow,
  ];
//   const images = [
//     'https://picsum.photos/300/200?random=1',
//     'https://picsum.photos/300/200?random=2',
//     'https://picsum.photos/300/200?random=3',
//     'https://picsum.photos/300/200?random=4',
//     'https://picsum.photos/300/200?random=5',
//     'https://picsum.photos/300/200?random=6',
//     'https://picsum.photos/300/200?random=7',
//     'https://picsum.photos/300/200?random=8',
//   ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const styles = {
    container: {
      width: '100%',
      height: '50px',
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: '#f0f0f0',
      display: 'flex',
      alignItems: 'center',
    },
    marqueeWrapper: {
      display: 'flex',
      animation: hoveredIndex !== null ? 'none' : 'marquee 20s linear infinite',
      gap: '20px',
    },
    imageContainer: {
      flexShrink: 0,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    image: {
      width: '300px',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
    },
    '@keyframes marquee': {
      '0%': {
        transform: 'translateX(0)',
      },
      '100%': {
        transform: 'translateX(-100%)',
      },
    },
  };

  return (
    <div>
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          
          .marquee-container {
            width: 100%;
            height: 50px;
            overflow: hidden;
            position: relative;
            background-color: transparent;
            display: flex;
            align-items: center;
          }
          
          .marquee-wrapper {
            display: flex;
            gap: 50px;
            animation: marquee 20s linear infinite;
          }
          
          .marquee-wrapper.paused {
            animation-play-state: paused;
          }
          
          .image-container {
            width: fit-content;
            flex-shrink: 0;
            transition: all 0.3s ease;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .marquee-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            transition: all 0.3s ease;
          }
          
          .image-container.hovered .marquee-image {
            transform: scale(1.1);
          }
          
          .image-container.dimmed .marquee-image {
            opacity: 0.3;
          }
          
          .image-container.normal .marquee-image {
            opacity: 1;
          }
        `}
      </style>
      
      <div className="marquee-container">
        <div className={`marquee-wrapper ${hoveredIndex !== null ? 'paused' : ''}`}>
          {/* Duplicate the images to create seamless loop */}
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className={`image-container ${
                hoveredIndex !== null
                  ? hoveredIndex === index
                    ? 'hovered'
                    : 'dimmed'
                  : 'normal'
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="marquee-image"
              />
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default InfiniteMarqueeSlider;