import React from "react";
import './twitter.css';

import twitterIcon from "../imagens/twitter.png";

function Twitter() {
  function url() {
    window.open("https://twitter.com/ezefferth");
  }
  return (
    <div>
      <img src={twitterIcon} alt={'twitter'} width='120px' onClick={url} />
    </div>

  )
}

export default Twitter;