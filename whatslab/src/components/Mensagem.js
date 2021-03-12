
import React from "react";
import styled from "styled-components";


const MensagemContainer = styled.div`
  display:flex;
`;


class Mensagem extends React.Component{
    render() {
        
      return (
          <div>
            <MensagemContainer>
              <p>{this.props.nomeRemetente}</p>
              <p>{this.props.conteudoDaMensagem} </p>
             </MensagemContainer> 
            </div>
    
    
        
    
           
           
        );
      }
    }
    
    export default Mensagem;
    
