import React from "react";
import './email.css';

import EmailIcon from "../imagens/email.png";
//const email = 'ezefferth96@gmail.com'
function Email() {
  function Icon() {
    alert("ezefferth96@gmail.com");
  }
  return (
    <div>
      <img src={EmailIcon} alt={'email'} width='100px' onClick={Icon} />
    </div>
  )
}

export default Email;