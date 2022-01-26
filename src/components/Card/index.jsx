import React, { useState } from "react";
import { Container, CardBox } from "./styles";
//import imagem from "../../assets/icon-supervisor.svg"


//const t = 'Powered by Technology'

const Card = (props) => {

    return (
        <Container>
            <CardBox line={props.line} imagem={props.imagem}>
                <h2>{props.cardTitle}</h2>
                <p>{props.cardDesc}</p>
                <div className='card-img'>
                    <img src={props.imagem} />
                </div>
            </CardBox>
        </Container>
    );
}

export default Card;