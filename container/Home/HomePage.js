import { useEffect, useState } from 'react';
import Wrapper, {
    Title,
    FirstSection,
    ImageWrapper,
    Subtitle,
    SiteTitle,
    TextSection,
    ImageBg,
    SecondSection,
    SecondImageBg,
    SecondTitle,
    ThirdSection,
    ThirdImageBg,
    ThridTitle,
    FourthSection,
    FourthImageBg,
    FourthTitle,
} from '../Home/Home.style';
import Image from 'next/image';

const HomePage = () => {

    // const [limit, setLimit] = useState(null);

    // useEffect(() => {
    //     setLimit(getDeviceType());
    // }, [])

    return (
        <>
            <Wrapper> 
                <SiteTitle>Bienvenue sur <br/>Mars High-Tech</SiteTitle>
            </Wrapper>
            <FirstSection>
                <ImageBg />
                <Title>Conception de courts moyens <br/> et longs métrages</Title>
                <Subtitle>En savoir plus</Subtitle>
            </FirstSection>
            <SecondSection>
                <SecondImageBg />
                <SecondTitle>Du matériel de haute qualité <br/> à votre disposition</SecondTitle>
            </SecondSection>
            <ThirdSection>
                <ThridTitle>Store</ThridTitle>
                <ThirdImageBg />
            </ThirdSection>
            <FourthSection>
                <FourthTitle>Contact</FourthTitle>
                <FourthImageBg />
            </FourthSection>
        </>
    );
}

export default HomePage;

