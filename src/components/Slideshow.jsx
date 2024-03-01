import React, { useState, useEffect } from 'react';
import './slideshow.css'; // Import your CSS file for additional styling if needed

const Slideshow = () => {
  const slidesContent = [
      {
        title:"Voir toutes les nouveautés",
        content:"Acheter"
      },
      {
        title:"Livraison et retour gratuits",
        content:"Membres: livraison et retour gratuit sous 30 jours.",
        link:["En savoir plus."," Rejoignez nous."]
        
      }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesContent.length);
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slideshow bg-slate-100 h-[60px] p-2">
      <div className="slides-container " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slidesContent.map((content, index) => (
          <div key={index} className="slide   text-sm text-slate-800 font-montserrat ">
            <p className='  font-bold'> {content.title}</p>
            
            <p >{content.content} <span>{content.link}</span></p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
