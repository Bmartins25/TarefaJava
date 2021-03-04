import React, { Component } from "react";
 
class Cor extends Component {
  render() {
    return (
      <div>
        <h2>Selecione a cor:</h2>
        <br></br>
        <div class="container3">
       
        <h12>
        <img src="https://casaefesta.com/wp-content/uploads/2020/01/tons-de-verde-03-1.jpg" width="100"></img>
        <br></br>
          <u>Verde</u> <br></br><br></br>
          <button id="btn5" onclick="alert('Verde')">Escolher</button>
          
        </h12><br></br>
        <br></br>
        <h11>
        <img src="https://i2.wp.com/portfoliodeagencias.meioemensagem.com.br/anuario/conteudo-img/2204/img11844.jpg?resize=585%2C550" width="100"></img>
        <br></br>
          <u>Vermelho</u><br></br><br></br>
          <button id="btn6" onclick="alert('Vermelho')">Escolher</button>
          
        </h11>
        </div>
      </div>
    );
  } // colocar 2 botões para jogar a cor para tela de resumo
}
 
export default Cor;