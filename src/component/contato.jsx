import React from "react";
import './contato.css';
import {CopyToClipboard} from 'react-copy-to-clipboard'

import PhoneIcon from "../imagens/phonee.png";

function Phone() {
  function Icon(){
    alert("(65) 9 9649-3590");
  }
  return (
    <div>
      <img src={PhoneIcon} alt={'phonee'} width='100px' onClick={Icon} />
    </div>
    
  )
}

export default Phone;