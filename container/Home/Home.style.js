import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: black;
    position: relative;
    margin-bottom: 70px;
    background: url('https://i.imgur.com/fA9Nu8M.jpg') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`;

export const Title = styled.div`
    position: absolute;
    font-size: 120px;
    color: white;
    top: 40%;
    left: 40%;

    @media only screen and (min-width: 668px) {
        font-size: 50px;
        left: 10%;
    }

    @media only screen and (min-width: 1024px) {
        font-size: 120px;
        left: 20%;
    }
`;

export default Wrapper;
