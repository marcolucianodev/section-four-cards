import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 5%;

    h1 {
        text-align: center;
        font-size: 25px;
        margin-bottom: 10px;
        color: #4c4e61;
    }

    h1.firstTitle {
        font-weight: 200;
        margin-top: 20px;
    }

    h1.secondTitle {
        margin-bottom: 20px;
    }

    p.desc {
        text-align: center;
        color: #a3a5ae;
    }
`;

