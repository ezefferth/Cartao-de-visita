import React from "react";
import './contato.css';
import PhoneIcon from "../imagens/phonee.png";

function Phone() {
  function Icon() {
    alert("(65) 9 9649-3590");
  }
  
  return (
    <div>
      <img src={PhoneIcon} alt={'phonee'} width='110px' onClick={Icon}/>
    </div>

  )
}

export default Phone;

/*
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }*/