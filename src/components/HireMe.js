
import React from "react";
import myCV from './docs/Kate_Polyakov___Resume.pdf';
import './styles/HireMe.css';

export default function HireMe(){
  return(
    <div>
      <button className="hireMe">
        <a target='blank' href={myCV}>Resumé</a>
      </button>
    </div>
  );
}