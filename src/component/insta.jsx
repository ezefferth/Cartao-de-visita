import React from "react";
import './insta.css';

import instaIcon from "../imagens/insta.png";

function Insta() {
  function url() {
    window.open("https://www.instagram.com/ezefferth/");
  }
  return (
    <div>
      <img src={instaIcon} alt={'insta'} width='100px' onClick={url} />
    </div>

  )
}

export default Insta;

//https://www.instagram.com/ezefferth/