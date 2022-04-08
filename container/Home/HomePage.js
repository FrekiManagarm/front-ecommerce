import React from 'react';
import Wrapper, {
    WrapperVideo,
    WrapperTitle,
    Title,
} from '../Home/Home.style';
import Image from 'next/image';
import ImgHome from '../../public/images/imageHome1.jpg';

const HomePage = () => {
    return (
        <>
            <Wrapper> 

                    <WrapperVideo>
                        <Image 
                            src={ImgHome}
                            alt={"Home Page Image Mars High-Tech"}
                            width="1450px"
                            height="800px"
                            className='Video'
                        />
                    </WrapperVideo>
                    <WrapperTitle>
                        <Title>Bienvenue sur <br /> Mars High Tech</Title>
                    </WrapperTitle>
            </Wrapper>
        </>
    );
}

export default HomePage;

