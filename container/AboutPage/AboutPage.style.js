import styled from "styled-components";

export const AboutPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
`;

export const Section = styled.section`
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
    margin-top: 130px;
`;

export const Return = styled.p`
    height: 20px;

`;

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${props => props.font || '4rem'};
    color: white;
    margin-bottom: 2rem;
    font-weight: bold;
    margin-top: 100px;
`;

export const SubTitle = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 2rem;
    color: white;
    margin-bottom: 10rem;
    opacity : 0.5;
`

export const SideText = styled.h4`
    display: flex;
    font-size: 1.5rem;
    color: white;
    text-align: left;
    margin-bottom: 2rem;
    margin-left: 50px;
`

export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CommentContent = styled.p`
    color: white;
    font-size: 25px;
    margin-left: 50px;
`;

export const CommentWrapper = styled.section`
    margin-left: 50px;
    margin-right: 50px;
`;

export const CommentAuthor = styled.span`
    color: white;
    margin-left: 50px;
`;

