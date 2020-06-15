import React from "react";
import './localizacao.css';

import localIcon from "../imagens/location.png";

function Localizacao() {
  function url() {
    window.open("https://www.google.com.br/maps/place/R.+José+de+Alençar,+13+-+Santa+Cruz,+Cuiabá+-+MT,+78068-150/@-15.6078529,-56.0518155,16.25z/data=!4m5!3m4!1s0x939db0230c2ec12f:0x9da5b2c3e49a1e0!8m2!3d-15.6050963!4d-56.0511571')}");
  }
  return (
    <div>
      <img src={localIcon} alt={'location'} width='100px' onClick={url}/>
    </div>
    
  )
}

export default Localizacao;
//onClick={window.open('https://www.google.com.br/maps/place/R.+José+de+Alençar,+13+-+Santa+Cruz,+Cuiabá+-+MT,+78068-150/@-15.6078529,-56.0518155,16.25z/data=!4m5!3m4!1s0x939db0230c2ec12f:0x9da5b2c3e49a1e0!8m2!3d-15.6050963!4d-56.0511571')}