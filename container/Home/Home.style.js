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
    height: 70vh;
`;

export const Title = styled.h2`
    position: absolute;
    top: 27rem;
    left: 3rem;
    color: white;
    letter-spacing: 10px;
    font-size: 75px;

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        font-size: 35px;
        top: 35rem;
        left: 4%;
        letter-spacing: 5px;
    } 

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        font-size: 50px;
        top: 18rem;
        left: 2rem;
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        font-size: 40px;
        top: 18rem;
        left: 4rem;
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        font-size: 50px;
        top: 20rem;
        left: 2rem;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        letter-spacing: 20px;
        font-size: 50px;
        top: 30rem;
        left: 4rem;
    } 
`;

export const Subtitle = styled.a`
    position: absolute;
    top: 45rem;
    left: 3rem;
    color: white;
    font-size: 30px;

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        font-size: 20px;
        top: 45rem;
        left: 4%;
    } 

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        font-size: 20px;
        top: 29rem;
        left: 2rem;
    } 

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        font-size: 20px;
        top: 29rem;
        left: 2rem;
    } 

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        font-size: 20px;
        top: 32rem;
    } 

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        font-size: 25px;
        top: 40rem;
        left: 4rem;
    }

`;

export const SecondSection = styled.div`
    position: relative;
    background-color: black;
    padding: 5%;
`;

export const SecondImageBg = styled.div`
    background-color: black;
    position: relative;
    background: url('https://i.imgur.com/NUvCRTI.jpg') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    opacity: 0.5;
    width: 90vw;
    height: 70vh;
`;

export const SecondTitle = styled.h2`
    position: absolute;
    color: white;
    font-size: 50px;
    letter-spacing: 20px;
    top: 30rem;
    left: 7rem;

    /* Extra small devices (phones, 600px and down) */
    @media screen and (max-width: 600px) {
        
    } 

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media screen and (min-width: 600px) {
        
    } 

    /* Medium devices (landscape tablets, 768px and up) */
    @media screen and (min-width: 768px) {
        
    } 

    /* Large devices (laptops/desktops, 992px and up) */
    @media screen and (min-width: 992px) {
        
    } 

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media screen and (min-width: 1200px) {
        
    }
`;

export const ThirdSection = styled.div`
    position: relative;
    background-color: black;
    padding: 5%;
`;

export const ThirdImageBg = styled.div`
    background-color: black;
    position: relative;
    background: url('https://i.imgur.com/BlIu0T4.jpg') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    opacity: 0.5;
    width: 90vw;
    height: 70vh;
`;

export const ThridTitle = styled.h2`
    color: white;
    font-size: 50px;
    padding-bottom: 2rem;
`;

export const FourthSection = styled.div`
    position: relative;
    background-color: black;
    padding: 5%;
`;

export const FourthTitle = styled.div`
    color: white;
    font-size: 50px;
    padding-bottom: 2rem;
`;

export const FourthImageBg = styled.div`
    background-color: black;
    position: relative;
    background: url('https://i.imgur.com/Xg4upLd.jpg') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    opacity: 0.5;
    width: 90vw;
    height: 70vh;
`;

export default Wrapper;
