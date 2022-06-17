import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: black;
    position: relative;
    /* background: url('https://i.imgur.com/fA9Nu8M.jpg') no-repeat center center; */
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    #video {
        width: 100vw;
        height: 100vh;
        z-index: -1;
    }
`;

export const SiteTitle = styled.div`
    position: absolute;
    font-size: 120px;
    color: white;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 321px) {
        font-size: 60px;
        left: 7rem;
    }

    @media only screen and (min-width: 738px) {
        font-size: 80px;
        left: 10rem;
    }

    @media only screen and (min-width: 769px) {
        font-size: 100px;
        left: 8rem;
        top: 10rem;
    }

    @media only screen and (min-width: 780px) {
        font-size: 90px;
        left: 8rem;
        top: 10rem;
    }

    @media only screen and (min-width: 800px) {
        font-size: 90px;
        left: 6rem;
        top: 5rem;
    }

    @media only screen and (min-width: 835px) {
        font-size: 80px;
        left: 2rem;
    }

    @media only screen and (min-width: 1024px) {
        font-size: 100px;
        left: 13rem;
        top: 27rem;
    }
    @media only screen and (min-width: 1200px) {
        font-size: 130px;
        left: 18rem;
        top: 14rem;
    }

    @media only screen and (min-width: 1918px) {
        font-size: 200px;
        left: 10rem;
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


    @media only screen and (min-width: 321px) {
        font-size: 30px;
        left: 2rem;
    }

    /* Extra small devices (phones, 600px and down) */    
    @media only screen and (min-width: 600px) {
        font-size: 10px;
        top: 30rem;
        left: 2rem;
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
    @media only screen and (min-width: 600px) {
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
        font-size: 15px;
        left: 2rem;
        top: 22rem;
    } 

    /* Medium devices (landscape tablets, 768px and up) */
    @media screen and (min-width: 768px) {
        font-size: 23px;
        left: 4rem;
        top: 29rem;
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
