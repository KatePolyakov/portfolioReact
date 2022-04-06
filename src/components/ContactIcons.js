import React from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';





import './styles/ContactIcons.css';

export default function ContactIcons(){

  


  return(
    <div>
      {/* <button className="btn first"><FontAwesomeIcon icon={faPhone} size="2x"/></button>
      <button className="btn second"><FontAwesomeIcon icon={faLinkedin} size="2x"/></button> */}
      <button className="btn fifth ">
        <a href="mailto:polyakovkate@gmail.com"><FontAwesomeIcon icon={faEnvelopeOpenText} size="2x"/></a>
      </button>
      <button className="btn fourth">
        <a href="tel:+17787517015"><FontAwesomeIcon icon={faPhone} size="2x"/></a>
      </button>
      <button className="btn third">
        <a target="blank" href="https://www.linkedin.com/in/kate-polyakov/"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
      </button>
      {/* <button className="btn sixth"><PhoneIncomingIcon className="w-12 h-12" /></button> */}
    </div>
  );
}