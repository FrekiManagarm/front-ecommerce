import { useEffect, useState } from 'react';
import Wrapper, {
    WrapperVideo,
    WrapperTitle,
    Title,
    FirstSection,
    TitleSection,
    ImageWrapper,
    SubtitleSection,
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
                <Title>Bienvenue sur <br/>Mars High-Tech</Title>
            </Wrapper>
            <FirstSection>
                <ImageWrapper>
                    <Image src="https://i.imgur.com/fA9Nu8M.jpg" layout='responsive' width={1500} height={1000} className="image" />
                    <TitleSection>Conception de courts moyens <br/> et longs métrages</TitleSection>
                    <SubtitleSection>En savoir plus</SubtitleSection>
                </ImageWrapper>
            </FirstSection>
        </>
    );
}

export default HomePage;

