
// import React from "react";
// import styled from "styled-components";


// const MensagemContainer = styled.div`
//   display:flex;
// `;
// const InputNomeRemetente = styled.input`
//   width: 100px;
// `

// const InputConteudo = styled.input`
//   flex: 1;
// `

// class Mensagem extends React.Component {
  // Explicação do uso do super
  // https://medium.com/reactbrasil/curtinhas-afinal-por-que-usamos-o-super-props-8debf169d156
 
//   state = {
//     inputNomeRemetente: "",
//     inputConteudoDaMensagem: "",
//   }
  
//   onChangeNomeRemetente = (evento) => {
//     this.setState({ inputNomeRemetente: evento.target.value })
//   }
//   onChangeConteudo = (evento) => {
//     this.setState({ inputConteudoDaMensagem: evento.target.value })
//   }

//   adicionarMensagem=()=>{
//     const novaMensagem = {
//       nomeRemetente: this.state.inputNomeRemetente,
//       conteudoDaMensagem: this.state.inputConteudoDaMensagem,
//     };


//     this.setState({
//       mensagens: [...state.mensagens, novaMensagem], nomeRemetente: "", conteudoDaMensagem: ""

//     });

// // }


//   render() {

//     return (
//         <MensagemContainer>
//           <p>{this.props.nomeRemetente}</p>
//           <p>{this.props.conteudoDaMensagem} </p>
//           <InputNomeRemetente type="text" placeholder={'Nome'} onChange={this.onChangeNomeRemetente} value={this.state.inputNomeRemetente} />
//           <InputConteudo type="text" placeholder={'Escreva sua Mensagem'} onChange={this.onChangeConteudo} value={this.state.inputConteudoDaMensagem} />

//           <button onClick={this.adicionarMensagem}>Enviar</button>
//         </MensagemContainer>
//     );
//   }
}

export default Mensagem;