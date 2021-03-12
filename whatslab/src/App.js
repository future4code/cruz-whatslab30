import React from "react"
import "./App.css";
import Mensagem from "./components/Mensagem"
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  height: 100vh;
  border: 1px solid black;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const MensagensContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`

const Negrito = styled.span`
  font-weight: bold;
`

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
    ],
   
  }
  

render(){
 
  const listaDeMensagens = this.state.mensagens.map((mensagem, index)=>{

    return( 
    <div key = {index}>
    <p> <Negrito>{mensagem.nomeRemetente} </Negrito> {': ' + mensagem.conteudoDaMensagem}</p>
    </div>
    );
  });

  return (

    <Container>
    <MensagensContainer>
     {listaDeMensagens}
    </MensagensContainer>
    <Mensagem adicionarMensagem={this.adicionarMensagem}/>
    
  </Container>
  );
  }
}
export default App;

