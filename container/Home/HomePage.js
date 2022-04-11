import React from 'react';
import Wrapper, {
    WrapperVideo,
    WrapperTitle,
    Title,
} from '../Home/Home.style';
import Image from 'next/image';

import { useState, UseEffect } from 'react';

const HomePage = () => {

    const [limit, setLimit] = useState(null);

    UseEffect(() => {
        setLimit(getDeviceType());
    }, []);

    return (
        <>
            <Wrapper>
                    <WrapperVideo>
                        <Image 
                            src="../../public/images/imageHome1.jpg"
                            alt={"Home Page Image Mars High-Tech"}
                            width={limit === 'desktop' ? '1024px' : limit === 'tablet' ? '760px' : limit === 'mobile' ? '480px'}
                            height={limit === 'desktop' ? '900px' : limit === 'tablet' ? '400px' : limit === 'mobile' ? '200px'}
                            className="Video"
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

