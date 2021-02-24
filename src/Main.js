import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Modelo from "./Modelo";
import Versão from "./Versão";
import Cor from "./Cor";
import Opcionais from "./Opcionais";
import Resumo from "./Resumo";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Wizard carros<br></br>

          <img src="https://www.casadaeducacao.com.br/octopus/design/images/34/products/b/carrinhopoliplaccccc.jpg" width="100"></img>
          </h1>
          <ul className="header">
            <li><NavLink exact to="/">Modelo</NavLink></li>
            <li><NavLink to="/Versão">Versão</NavLink></li>
            <li><NavLink to="/Cor">Cor</NavLink></li>
            <li><NavLink to="/Opcionais">Opcionais</NavLink></li>
            <li><NavLink to="/Resumo">Resumo</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Modelo}/>
            <Route path="/Versão" component={Versão}/>
            <Route path="/Cor" component={Cor}/>
            <Route path="/Opcionais" component={Opcionais}/>
            <Route path="/Resumo" component={Resumo}/>
             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;