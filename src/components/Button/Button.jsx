// GlassmorphicButton.jsx
import React from 'react';
import './Button.css';

const Button = ({ title, Icon, width, height, className, ...props }) => {
  return (
    <button 
      style={{width: width, height: height, maxWidth: '100%'}} 
      className={`glassmorphic-btn ${className || ''}`} 
      {...props}
    >
      <span>{title}</span>
      {Icon && <Icon className="icon" />}
    </button>
  );
};

export default Button;

// import React from 'react'
// import './Button.css'
// const Button = () => {
//   return (
//     <div>Button</div>
//   )
// }

// export default Button