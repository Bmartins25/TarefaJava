import React, { Component } from "react";
//import React, { Component } from "./Modelo";
//import React, { Component } from "./Cor";
//import React, { Component } from "./Versão";
//import React, { Component } from "./Opcionais";

 
class Resumo extends Component {
  render() {
    return (
      <div>
        <h2>Resumo da solicitação:</h2>
        <p>Exemplo Estático</p>



        <p> Sedan --------------------------------- R$ 0,00</p>
        
        <p> Onix --------------------------------- R$ 55.000,00</p>
        
        <p> Vermelho --------------------------------- R$ 0,00</p>
        
        <p> GPS --------------------------------- R$ 100,00</p>
        <br></br>
        <p><u><b>Total</b></u> ----------------------------------- R$ 55.100,00</p>
 
        
      </div>
    );
  } // Faltando função, infelizmente não consegui a tempo para estudar e adaptar ao projeto professor.
}
 
export default Resumo;