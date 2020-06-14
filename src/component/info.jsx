import React from "react";
import './info.css';

import infoIcon from "../imagens/info.png";

function Info() {
  function Icon(){
    alert("Sobre mim?\n\nSou estudante de Engenharia da Computação UFMT-Campus Várzea Grande");
  }
  return (
      <div className='infoImg'>
        <img src={infoIcon} alt={'info'} width='100px' onClick={Icon}/>
      </div>
  )
}

export default Info;