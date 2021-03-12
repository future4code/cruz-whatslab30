import React from "react"
import "./App.css";
// import Mensagem from "./components/Mensagem"
import styled from 'styled-components';

const MensagemContainer = styled.div`
  display:flex;
`;
const InputNomeRemetente = styled.input`
  width: 20%;
`

const InputConteudo = styled.input`
  flex: 1;
`

const Container = styled.div`
  max-width: 100%;
  height: 80vh;
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

  state = {

    mensagens: [
      {
        nomeRemetente: "Julia:",
        conteudoDaMensagem: "Olá, gente!"
      },

      {
        nomeRemetente: "Italo:",
        conteudoDaMensagem: "Bom dia!"
      }
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

      return (
        <div key={index}>
          <p> <Negrito>{mensagem.nomeRemetente} </Negrito> {': ' + mensagem.conteudoDaMensagem}</p>
        </div>
      );
    });

    return (
      <div>
        <Container>

          <MensagensContainer>
            {listaDeMensagens}
          </MensagensContainer>
          {this.adicionarMensagem}

        </Container>
        <MensagemContainer>
          <p>{this.props.nomeRemetente}</p>
          <p>{this.props.conteudoDaMensagem} </p>
          <InputNomeRemetente onKeyDown={this.apertouEnter} type="text" placeholder={'Nome'} onChange={this.onChangeNomeRemetente} value={this.state.inputNomeRemetente} />
          <InputConteudo onKeyDown={this.apertouEnter} type="text" placeholder={'Escreva sua Mensagem'} onChange={this.onChangeConteudo} value={this.state.inputConteudoDaMensagem} />

          <button onClick={this.adicionarMensagem}>Enviar</button>
        </MensagemContainer>
      </div>
    );
  }
}
export default App;

