import React from "react";
import './facebook.css';

import faceIcon from "../imagens/face.png";

function Facebook() {
  function url() {
    window.open("https://pt-br.facebook.com/ezefferth");
  }
  return (
    <div>
      <img src={faceIcon} alt={'face'} width='120px' onClick={url} />
    </div>
    
  )
}

export default Facebook;