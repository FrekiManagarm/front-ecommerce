import { useEffect, useState } from 'react';
import Wrapper, {
    WrapperVideo,
    WrapperTitle,
    Title,
} from '../Home/Home.style';
import Image from 'next/image';
import ImgHome from '../../public/images/imageHome1.jpg';
import { getDeviceType } from '../../helpers/get_device_type';

const HomePage = () => {

    const [limit, setLimit] = useState(null);

    useEffect(() => {
        setLimit(getDeviceType());
    }, [])

    return (
        <>
            <Wrapper> 
                <Title>Bienvenue sur <br/>Mars High-Tech</Title>
            </Wrapper>
            
        </>
    );
}

export default HomePage;

