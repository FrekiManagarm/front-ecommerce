import { useRouter, withRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Drawer } from 'antd';
import useTranslation from '../../../hooks/useTranslation';
import {
    WrapperButton,
    ButtonBurger,
    TopBar,
    MiddleBar,
    DownBar,
} from './MainMenu.style';


const MainMenu = ({ className, isLoggedIn, drawer, setDrawer  }) => {

    const { t } = useTranslation();
    const router = useRouter();
    const { locale, query } = router;
    const [language, setLanguage] = useState(null);

    return (
            <WrapperButton>
                <ButtonBurger onClick={() => setDrawer(!drawer)}>
                    <TopBar></TopBar>
                    <MiddleBar></MiddleBar>
                    <DownBar></DownBar>
                </ButtonBurger>
            </WrapperButton>
    );
}

export default MainMenu;
