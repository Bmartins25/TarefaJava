import React, { Component } from "react";
 
class Modelo extends Component {
  render() {
    return (
      <div class="container1">
        <h2>Escolha um modelo abaixo:</h2>
<br></br>        
        <div class="container3">
       
       <h7>
       <img src="https://images.noticiasautomotivas.com.br/img/f/Novo-Onix-Plus-Premier-19.jpg" width="100"></img>
            <br></br>
            <u>Sedan</u>
       <br></br>
       </h7><br></br>

       
       <button id="btn1" onclick="myFuction()">Sedan</button>
       <br></br>
        <br></br>
       <h8>
        <img src="https://s2.glbimg.com/KIckQ9N1kVaHwTjM0jCTTpZ42Qg=/0x0:967x698/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/z/t/4LwHymTTKv4DX80rUTlg/peugeotlandtrek.png" width="100"></img>
        <br></br>

            <u>Pickape</u>
            <br></br>
            <br></br>
        </h8>
        <button id="btn2" onclick="alert('Modelo 2')">Escolher</button>
       <br></br>
      </div>
      </div>
    );
  } // função para os botões? Rota? 
}
 
export default Modelo;