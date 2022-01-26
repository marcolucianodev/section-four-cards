import styled, {css} from "styled-components";

export const Container = styled.main`
    display: flex;
    justify-content: center;
    padding: 20px 5%;
`;

export const CardBox = styled.div`
    background-color: #ffffff;
    width: 100%;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 10px 20px 1px hsl(229, 6%, 66%);
    border-top: ${props => props.line};
    max-width: 400px;

    h2 {
        margin-bottom: 10px;
        color: hsl(234, 12%, 34%);
    }

    p {
        margin-bottom: 30px;
        color: hsl(229, 6%, 66%);
    }

    div.card-img {
        display: flex;
        justify-content: flex-end;
    }
`;
