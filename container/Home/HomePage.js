import { useEffect, useState } from 'react';
import Wrapper, {
    Title,
    FirstSection,
    ImageWrapper,
    Subtitle,
    SiteTitle,
    TextSection,
    ImageBg,
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
        </>
    );
}

export default HomePage;

