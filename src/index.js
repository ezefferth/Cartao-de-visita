import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Info from './component/info.jsx'
import Contato from './component/contato.jsx'
import Email from './component/email.jsx'
import Localizacao from './component/localizacao.jsx'
import Whatsapp from './component/whatsapp'
import Insta from './component/insta'
import Twitter from './component/twitter'
import Facebook from './component/facebook'
ReactDOM.render(
  <div>
    <h1>
      Welcome to Business Card
    </h1>
    <h2> 
      <Info></Info>
      <Contato></Contato>
      <Email></Email>
      <Localizacao></Localizacao>
    </h2>
    <h3>
      <Whatsapp></Whatsapp>
      <Insta></Insta>
      <Twitter></Twitter>
      <Facebook></Facebook>
    </h3>
  </div>,

  document.getElementById('root')
);

