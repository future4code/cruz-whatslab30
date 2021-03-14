import React from "react"
import "./App.css";
import styled from 'styled-components';
import doublecheck from "./img/doublecheck.svg"
import telefone from "./img/phone.svg"
import camera from "./img/video-camera.svg"
import menu from "./img/menu.svg"
import Icone from './components/Icone.js'

const MensagemContainer = styled.div`
  display:flex;
  padding: 0.3em;
  margin: 0.15em 0px;
 
`

const Doublecheck = styled.img`
  position: absolute;
  height: 0.5em;
  right: 4px;
  bottom: 4px;
`

const InputNomeRemetente = styled.input`
  width: 30%;
  height: 80%;
  border-radius: 5px;
 
`
const InputConteudo = styled.input`
  flex: 1;
  border-radius: 5px;
`

export const ContainerNome = styled.div`
  color: #9AAC8C;
  font-size: 0.8em;
  font-weight: 600;
  margin-bottom: 0.2em;
`

const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  border: 1px solid black;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color:#e5ddd5;
`

const MensagensContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`

const CabecalhoContainer = styled.div`
  background-color:#075E54;
  display:flex;
  justify-content:flex-end;
  height: 70px;
  width:100%;
`


/*const Negrito = styled.span`
  font-weight: bold;
`*/




const BalaoVerde = styled.div`
  background-color:#DDF7C8;
  align-self:flex-end;
  max-width:60%;
  min-width: 8%;
  margin-bottom: 1em;
  word-wrap: break-word;
  padding: 0.9em 0.8em;
  border-radius: 0.5em;
  font-weight: 450;
  line-height: 1.3;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  
  &:after {
  position: absolute;
  top: 0px;
  right: -8px;
	content: '';
	border: 15px solid transparent;
	border-top-color: #DDF7C8;
  
}
`
const ContainerBalao = styled.div`
    display:flex;
    justify-content:flex-end;
    
`

const ContainerIcones = styled.div`
width: 200px;
display:flex;
align-items:center;
justify-content:space-around;

`
const BalaoBranco =styled.div`
  background-color: #ffffff;
  align-self:flex-start;
  max-width:60%;
  min-width: 8%;
  margin-bottom: 1em;
  word-wrap: break-word;
  padding: 0.1em 0.8em;//0.9, 0.8
  border-radius: 0.5em;
  font-weight: 450;
  line-height: 1.3;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  position:relative;
  &:after {
  position: absolute;
  top: 0px;
  left: -8px;
	content: '';
	border: 15px solid transparent;
	border-top-color: #ffffff;
  
}
`
class App extends React.Component {

  state = {

    mensagens: [
      {
        nomeRemetente: "eu",
        conteudoDaMensagem: "Olá, ítalo!"
      },

      {
        nomeRemetente: "Italo",
        conteudoDaMensagem: "Oi Laura, Bom dia!"
      },

     
    ],

    inputNomeRemetente: "",
    inputConteudoDaMensagem: "",

  }

  onChangeNomeRemetente = (evento) => {
    this.setState({ inputNomeRemetente: evento.target.value })
  }
  onChangeConteudo = (evento) => {
    this.setState({ inputConteudoDaMensagem: evento.target.value })
  }

  adicionarMensagem = () => {
      const novaMensagem = {
      nomeRemetente: this.state.inputNomeRemetente,
      conteudoDaMensagem: this.state.inputConteudoDaMensagem,
    };

  this.setState({
      mensagens: [...this.state.mensagens, novaMensagem], inputNomeRemetente: "", inputConteudoDaMensagem: ""

    });

  }

  apertouEnter = (event) => {

    if (event.code === 'Enter') {
      
      const novaMensagem = {
        nomeRemetente: this.state.inputNomeRemetente,
        conteudoDaMensagem: this.state.inputConteudoDaMensagem,
      };
  
  
      this.setState({
        mensagens: [...this.state.mensagens, novaMensagem], inputNomeRemetente: "", inputConteudoDaMensagem: ""
  
      });

      return novaMensagem
    }
  }

  render() {

   

    const listaDeMensagens = this.state.mensagens.map((mensagem, index) => {
      if(mensagem.nomeRemetente === "eu"){
      return (
        
        <div key={index}>
        
        
        <ContainerBalao>
          <BalaoVerde>
            <div>{mensagem.conteudoDaMensagem}</div>
            <Doublecheck src={doublecheck}/>
          </BalaoVerde>
        </ContainerBalao>
        </div>
      
      );
    }else if (mensagem.nomeRemetente !== "eu"){
      return (
      
          <BalaoBranco>
            <p><ContainerNome>{mensagem.nomeRemetente}</ContainerNome></p>
            <p>{mensagem.conteudoDaMensagem}</p>
          </BalaoBranco>
      
      )
    }
   
  });
  
    return (
  <div>
    <Container>
      <CabecalhoContainer>
        <ContainerIcones>
          <Icone icone={telefone}></Icone>
           <Icone icone={camera}></Icone>
          <Icone icone={menu}></Icone>
          </ContainerIcones>
        </CabecalhoContainer>
         
        <MensagensContainer>
          {listaDeMensagens}
        </MensagensContainer>
        {this.adicionarMensagem}

        <MensagemContainer>
          <p>{this.props.nomeRemetente}</p>
          <p>{this.props.conteudoDaMensagem} </p>
            <InputNomeRemetente onKeyDown={this.apertouEnter} type="text" placeholder={'Nome'} onChange={this.onChangeNomeRemetente} value={this.state.inputNomeRemetente} />
            <InputConteudo onKeyDown={this.apertouEnter} type="text" placeholder={'Escreva sua Mensagem'} onChange={this.onChangeConteudo} value={this.state.inputConteudoDaMensagem} />
          <button onClick={this.adicionarMensagem}>Enviar</button>
        </MensagemContainer>
      
    </Container>
  </div>
    );
  }
}
export default App;

