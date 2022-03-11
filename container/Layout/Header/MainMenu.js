import { useRouter, withRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Drawer } from 'antd';
import useTranslation from '../../../hooks/useTranslation';
import WrapperButton, { 
    WrapperAll,
    WrapperDrawer,
    WrapperLink,
    WrapperSousLinkTitle,
    WrapperSousLink,
    WrapperSousLinkUnit,
    WrapperRightPart,
    WrapperTop,
    Title,
    Description,
    WrapperDown,
    WrapperImage,
    WrapperImageUnit,
    ButtonBurger,
    TopBar,
    MiddleBar,
    DownBar,
    } from './MainMenu.style';
import InstagramPic from '../../../public/images/Instagram.png';
import FacebookPic from '../../../public/images/Facebook.png';
import TwitterPic from '../../../public/images/Twitter.png';
import TwitchPic from '../../../public/images/Twitch.png';
import YoutubePic from '../../../public/images/Youtube.png';

const MainMenu = ({ className, isLoggedIn  }) => {

    const { t } = useTranslation();
    const router = useRouter();
    const { locale, query } = router;
    const [language, setLanguage] = useState(null);

    const [visible, setVisible] = useState(false);
    const [placement, setPlacement] = useState("top");

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <WrapperButton>
                <ButtonBurger onClick={showDrawer}>
                    <TopBar></TopBar>
                    <MiddleBar></MiddleBar>
                    <DownBar></DownBar>
                </ButtonBurger>
            </WrapperButton>
        <Drawer
            placement={placement}
            height={1024}
            onClose={onClose}
            visible={visible}
        >
            <WrapperAll>
                <WrapperDrawer>
                    <WrapperLink>
                        <WrapperSousLinkTitle>
                            <Link href="../Apropos">A propos</Link>
                        </WrapperSousLinkTitle>
                        <WrapperSousLink>
                            <WrapperSousLinkUnit>
                                <Link href="../Mars">Mars</Link>
                            </WrapperSousLinkUnit>
                            <WrapperSousLinkUnit>
                                <Link href="../Work">Work</Link>
                            </WrapperSousLinkUnit>
                            <WrapperSousLinkUnit>
                                <Link href="../Avis">Avis</Link>
                            </WrapperSousLinkUnit>
                        </WrapperSousLink>
                    </WrapperLink>
                    <WrapperLink>
                        <WrapperSousLinkTitle>
                            <Link href="../Store">Store</Link>
                        </WrapperSousLinkTitle>
                        <WrapperSousLink>
                            <WrapperSousLinkUnit>
                                <Link href="../Appareils">Appareils</Link>
                            </WrapperSousLinkUnit>
                            <WrapperSousLinkUnit>
                                <Link href="../Accessoires">Accessoires</Link>
                            </WrapperSousLinkUnit>
                            <WrapperSousLinkUnit>
                                <Link href="../Son">Son</Link>
                            </WrapperSousLinkUnit>
                        </WrapperSousLink>
                    </WrapperLink>
                    <WrapperLink>
                        <WrapperSousLinkTitle>
                            <Link href="../Location">Location</Link>
                        </WrapperSousLinkTitle>
                        <WrapperSousLink>
                            <WrapperSousLinkUnit>
                                <Link href="../Conditions">Conditions</Link>
                            </WrapperSousLinkUnit>
                            <WrapperSousLinkUnit>
                                <Link href="../Tarifs">Tarifs</Link>
                            </WrapperSousLinkUnit>
                        </WrapperSousLink>
                    </WrapperLink>
                    <WrapperLink>
                        <WrapperSousLinkTitle>
                            <Link href="../Contact">Contact</Link>
                        </WrapperSousLinkTitle>
                        <WrapperSousLink>
                            <WrapperSousLinkUnit>
                                <Link href="../Reseaux">Réseaux</Link>
                            </WrapperSousLinkUnit>
                            <WrapperSousLinkUnit>
                                <Link href="../Partenaires">Partenaires</Link>
                            </WrapperSousLinkUnit>
                        </WrapperSousLink>
                    </WrapperLink>
                </WrapperDrawer>

                <WrapperRightPart>
                    <WrapperTop>
                        <Title>Adress</Title>
                        <Description>102 Cours Franklin Roosvelt 33000 Bordeaux</Description>
                    </WrapperTop>

                    <WrapperDown>
                        <Title>Follow Us</Title>
                        <WrapperImage>
                            <WrapperImageUnit>
                                <Image src={FacebookPic} alt={"Facebook"} height={20} width={20} />
                            </WrapperImageUnit>
                            <WrapperImageUnit>
                                <Image src={TwitterPic} alt={"Twitter"} height={20} width={20} />
                            </WrapperImageUnit>
                            <WrapperImageUnit>
                                <Image src={InstagramPic} alt={"instagram"} height={20} width={20} />
                            </WrapperImageUnit>
                            <WrapperImageUnit>
                                <Image src={TwitchPic} alt={"Twitch"} height={20} width={20} />
                            </WrapperImageUnit>
                            <WrapperImageUnit>
                                <Image src={YoutubePic} alt={"Youtube"} height={20} width={20} />
                            </WrapperImageUnit>
                        </WrapperImage>
                    </WrapperDown>
                </WrapperRightPart>
            </WrapperAll>
        </Drawer>
    </>
    );
}

export default withRouter(MainMenu);
