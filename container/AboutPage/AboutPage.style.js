import styled from "styled-components";

const size = {
    mobileSizeStandard : '667px',
    mobileSizePlus: '736px',
    tabletSizeMini : '768px',
    tabletSizeStandard : '768px',
    desktopSize: '1200',
};

export const deviceLandscape = {
    mobileSizeStandard: `(min-width : ${size.mobileSizeStandard})`,
    mobileSizePlus: `(min-width : ${size.mobileSizePlus})`,
    tabletSizeMini: `(min-width : ${size.tabletSizeMini})`,
    tabletSizeStandard: `(min-width : ${size.tabletSizeStandard})`,
}

export const devicePortrait = {
    mobileSizeStandard: `(max-width : ${size.mobileSizeStandard})`,
    mobileSizePlus: `(min-width : ${size.mobileSizePlus})`,
    tabletSizeMini: `(min-width : ${size.tabletSizeMini})`,
    tabletSizeStandard: `(min-width : ${size.tabletSizeStandard})`,
    desktopSize: `(min-width : ${size.desktopSize})`
}

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

    @media ${deviceLandscape.mobileSizeStandard} {
        font-size: ${props => '3rem'};
        text-align: center;
    }

    @media ${deviceLandscape.mobileSizePlus} {
        font-size: ${props => '2rem'};
    }

    @media ${devicePortrait.mobileSizeStandard} {
        font-size: ${props => '2rem'};
        text-align: center;
    }

    @media ${devicePortrait.tabletSizeMini} {
        font-size: ${props => '4rem'};
    }

    @media ${deviceLandscape.tabletSizeMini} {
        font-size: ${props => '3rem'};
    }

    @media ${devicePortrait.tabletSizeStandard} {
        font-size: ${props => '3rem'};
    }
    @media ${devicePortrait.desktopSize} {
        font-size: ${props => '5rem'};
    }
`;

export const SubTitle = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 2rem;
    color: white;
    margin-bottom: 10rem;
    opacity : 0.5;

    @media ${deviceLandscape.mobileSizeStandard} {
        text-align: center;
    }

    @media ${devicePortrait.mobileSizeStandard} {
        text-align: center;
        font-size: 1.4rem;
    }

    @media ${devicePortrait.tabletSizeMini} {
        text-align: center;
        font-size: 1.4rem;
    }
`

export const SideText = styled.h4`
    display: flex;
    font-size: 1.5rem;
    color: white;
    text-align: left;
    margin-bottom: 2rem;
    margin-left: 50px;

    @media ${devicePortrait.mobileSizeStandard} {
        font-size: 1.2rem;
    }
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

    @media ${devicePortrait.mobileSizeStandard} {
        font-size: 10px;
    }

    @media ${deviceLandscape.mobileSizePlus} {
        font-size: 12px;
    }
`;

export const CommentWrapper = styled.section`
    margin-left: 50px;
    margin-right: 50px;
`;

export const CommentAuthor = styled.span`
    color: white;
    margin-left: 50px;
`;

