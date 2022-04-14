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

export const SiteTitle = styled.div`
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
    position: relative;
    background-color: black;
    padding: 5%;
`;

export const ImageWrapper = styled.div`
    position: absolute;
    /* z-index: 999; */
    .image {
        opacity: 0.4;
    }
`;

export const ImageBg = styled.div`
    background-color: black;
    position: relative;
    background: url('https://i.imgur.com/fA9Nu8M.jpg') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    opacity: 0.5;
    width: 90vw;
    height: 60vh;
`;

export const Title = styled.h2`
    position: absolute;
    top: 27rem;
    left: 3rem;
    color: white;
    letter-spacing: 10px;
    font-size: 75px;

    @media only screen and (min-width: 668px) {
        font-size: 35px;
        top: 35rem;
        left: 4%;
        letter-spacing: 5px;
    } 

    @media only screen and (min-width: 700px) {
        font-size: 50px;
        top: 18rem;
        left: 2rem;
    }

    @media only screen and (min-width: 870px) {
        font-size: 40px;
        top: 18rem;
    }

    @media only screen and (min-width: 900px) {
        font-size: 50px;
        top: 20rem;
    }

    @media only screen and (min-width: 1024px) {
        font-size: 50px;
        top: 17rem;
    }

    @media only screen and (min-width: 1200px) {
        letter-spacing: 20px;
        font-size: 50px;
        top: 35rem;
        left: 4rem;
    } 

    @media only screen and (min-width: 2400px) {
        font-size: 100px;
        top: 65rem;
        left: 5rem;
    }

    @media only screen and (min-width: 2100px) {
        
    }
`;

export const Subtitle = styled.h2`
    position: absolute;
    top: 45rem;
    left: 3rem;
    color: white;
    font-size: 30px;

    @media only screen and (min-width: 600px) {
        font-size: 20px;
        top: 45rem;
        left: 4%;
    } 

    @media only screen and (min-width: 700px) {
        font-size: 20px;
        top: 29rem;
        left: 2rem;
    }

    @media only screen and (min-width: 800px) {
        font-size: 20px;
        top: 29rem;
        left: 2rem;
    }

    @media only screen and (min-width: 900px) {

    }

    @media only screen and (min-width: 1024px) {
        font-size: 20px;
        top: 29rem;
    }

    @media only screen and (min-width: 1200px) {
        font-size: 25px;
        top: 46rem;
        left: 4rem;
    }

    @media only screen and (min-width: 2400px) {
        font-size: 40px;
        top: 85rem;
        left: 6rem;
    }

    @media only screen and (min-width: 2100px) {
        font-size: 75px;
    }

`;

export const TextSection = styled.div`

`;

export default Wrapper;
