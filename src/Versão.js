import React, { Component } from "react";
 
class Versão extends Component {
  render() {
    return (
      <div>
        <h2>Escolha a versão:</h2>
        <br></br>
        <div class="container3">
       
        <h7>
        <img src="https://img0.icarros.com/dbimg/imgadicionalanuncio/5/185171664_1" width="100"></img>
        <br></br>
          <u>Onix</u> <br></br>
          Ar condicionado<br></br>
          Trava automática<br></br>
          Direção hidráulica<br></br>
          R$ 55.0000,00 
        </h7><br></br><br></br>
        <button id="btn3" onclick="alert('Onix')">Escolher</button>
        <br></br>
        <br></br>
        <h8>
        <img src="https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2020/07/29063903/CAPA_tiggo-8-1160x653.jpg" width="100"></img>
        <br></br>
          <u>Tiggo 8 </u><br></br>
          Ar condicionado<br></br>
          Trava automática<br></br>
          Direção elétrica<br></br>
          Câmera traseira<br></br>
          R$ 95.0000,00 
        </h8><br></br><br></br>
        <button id="btn4" onclick="alert('Tiggo 8')">Escolher</button>
        <br></br>
        </div>
      </div>
    );
  } // colocar 2 botões para jogar a versão para tela de resumo
}
 
export default Versão;