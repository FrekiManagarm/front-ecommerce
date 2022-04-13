import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: black;
    position: relative;
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
        font-size: 80px;
        left: 10%;
    }

    @media only screen and (min-width: 1024px) {
        font-size: 120px;
        left: 10%;
    }

    @media only screen and (min-width: 1200px) {
        font-size: 150px;
        left: 10%;
    }
`;

export const FirstSection = styled.div`
    background-color: black;
    padding: 5%;
`;

export const ImageWrapper = styled.div`
    .image {
        opacity: 0.4;
    }
`;

export const TitleSection = styled.h2`
    position: absolute;
    color: white;
    letter-spacing: 10px;
    font-size: 75px;
    top: 155%;
    left: 8%;
`;

export const SubtitleSection = styled.h2`
    position: absolute;
    top: 177%;
    left: 8%;
    color: white;
    font-size: 25px;
`;

export default Wrapper;
