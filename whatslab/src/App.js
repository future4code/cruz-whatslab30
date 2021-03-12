import React from "react"
import "./App.css";
import Mensagem from "./components/Mensagem"

class App extends React.Component {

  state={

    mensagens:[
     { nomeRemetente: "Julia:",
      conteudoDaMensagem:"Olá, gente!"
      },

      {
        nomeRemetente: "Italo:",
        conteudoDaMensagem:"Bom dia!"
      }
    ]

   
  }

  

render(){

  const listaDeMensagens = this.state.mensagens.map((mensagem)=>{

    return( 
    <Mensagem
    nomeRemetente={mensagem.nomeRemetente}
    conteudoDaMensagem={mensagem.conteudoDaMensagem}
    />
    );
  });
  return (
    <div className="app-container">
      <div>
        {listaDeMensagens}
        
      </div>
      
    </div>
  );
  }
}
export default App;

