import React from "react";
import { Container } from "./styles";

const Header = (props) => {
    return (
        <Container>
            <h1 className="firstTitle">{props.titleFirt}</h1>
            <h1 className="secondTitle">{props.titleSecond}</h1>
            <p className="desc">{props.desc}</p>
        </Container>
    );
}

export default Header;