import React, { Component } from "react";
 
class Opcionais extends Component {
  render() {
    return (
      <div>
        <h2>Opcionais:</h2><br></br>
        <div class="container4">
       
       <h9>
       <img src="https://images.madeiramadeira.com.br/product/images/79340463-cadeira-cadeirinha-bebe-descanso-vibratoria-musical-menino-macia-azul-importway-bw-045-azsku15699-421-1_zoom-1200x1200.jpg?width=900" width="100"></img>
       <br></br>
       <br></br>
          <u>Cadeirinha de bebê</u> <br></br>
          R$ 250,00 <br></br><br></br>
          <button id="btn7" onclick="alert('Cadeirinha')">Escolher</button>
          </h9>
       <br></br><br></br>
       <h10>
        <img src="https://cdn.shopify.com/s/files/1/0043/4477/4725/products/200007763_201336100_14_193_MINI_GPS_480x480@2x.jpg?v=1576203637" width="100"></img>
        <br></br>
        <br></br>
          <u>GPS localização</u> <br></br>
          R$ 100,00 <br></br><br></br>
          <button id="btn8" onclick="alert('GPS')">Escolher</button>
       </h10><br></br>
       <br></br>

       <h11>
        <img src="https://connectparts.vteximg.com.br/arquivos/ids/1056731-1000-1000/kit-farol-milha-gol-g5-2009-2010-2011-2012-moldura-cromada-auxiliar-neblina---xenon-8000k-connectparts--1-.jpg?v=637104551480200000" width="100"></img>
        <br></br>
        <br></br>
          <u>Farol de Milha</u> <br></br>
          R$ 150,00 <br></br><br></br>
          <button id="btn9" onclick="alert('GPS')">Escolher</button>
       </h11>
       <br></br>
        </div>
      </div>



    );
  }
} // colocar 2 botões para jogar o adicional para tela de resumo
 
export default Opcionais;