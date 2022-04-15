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
            <div className='description'>
                <h2></h2>
                <p></p>
            </div>
            <SecondSection>
                <SecondImageBg />
                <SecondTitle>Du matériel de haute qualité <br/> à votre disposition</SecondTitle>
            </SecondSection>
            <div className='description'>
                <h2>Réalisez vos projets <br /> avec nous.</h2>
                <p>Nous aimons mobiliser toutes nos conaissances et notre expérience <br/> au service de nos clients</p>
            </div>
            <ThirdSection>
                <ThridTitle>Store</ThridTitle>
                <ThirdImageBg />
            </ThirdSection>
            <div className='description'>
                <h2></h2>
                <p></p>
            </div>
            <FourthSection>
                <FourthTitle>Contact</FourthTitle>
                <FourthImageBg />
            </FourthSection>
            <div className='description'>
                <h2></h2>
                <p></p>
            </div>
        </>
    );
}

export default HomePage;

