import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ name, title, text, image }:{name: string, title: string, text: string, image: string}) => {
  return (
    <div className="testimonial-card">
      <div style={{display: "flex", justifyContent: "left"}}>
        <img src={image} alt={name} className="testimonial-image" />
        <div className="testimonial-content" style={{paddingLeft: "10px"}}>
          <h3>{name}</h3>
          <p className='text-gray-500'>{title}</p>
        </div>
      </div>
      <div className="testimonial-content">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
