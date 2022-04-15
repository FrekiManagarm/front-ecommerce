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
import ReactPlayer from 'react-player';

const HomePage = () => {

    // const [limit, setLimit] = useState(null);

    // useEffect(() => {
    //     setLimit(getDeviceType());
    // }, [])

    return (
        <>
            <Wrapper> 
                <ReactPlayer height="100vh" width="100vw" loop muted playing url='https://i.imgur.com/7g8abNj.mp4'  config={{
                    youtube: { playerVars: { showinfo: 1, preload: true } }
                }} style={{ pointerEvents: 'none' }} />
                <SiteTitle>Bienvenue sur <br/>Mars High-Tech</SiteTitle>
            </Wrapper>
            <FirstSection>
                <ImageBg />
                <Title>Conception de courts, moyens <br/> et longs métrages.</Title>
                <Subtitle>En savoir plus</Subtitle>
            </FirstSection>
            {/* <div className='description'>
                <h2></h2>
                <p></p>
            </div> */}
            <SecondSection>
                <SecondImageBg />
                <SecondTitle>Du matériel de haute qualité <br/> à votre disposition</SecondTitle>
            </SecondSection>
            <div className='description'>
                <h2>Réalisez vos projets <br /> avec nous.</h2>
                <p>Nous aimons mobiliser toutes nos connaissances et notre expérience <br/> au service de nos clients.</p>
            </div>
            <ThirdSection>
                <ThridTitle>Store</ThridTitle>
                <ThirdImageBg />
            </ThirdSection>
            <div className='description'>
                <h2>Retrouvez tous notre matériel <br /> dans la rubrique Store</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <FourthSection>
                <FourthTitle>Contact</FourthTitle>
                <FourthImageBg />
            </FourthSection>
            <div className='description'>
                <h2>Contactez-nous dès <br /> maintenant</h2>
                <p></p>
            </div>
        </>
    );
}

export default HomePage;

