import React from 'react';
import Image from 'next/image';
import { withRouter } from 'next/router';
import Link from 'next/link';
import { 
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
} from './MainMenu.style';
import InstagramPic from '../../../public/images/Instagram.png';
import FacebookPic from '../../../public/images/Facebook.png';
import TwitterPic from '../../../public/images/Twitter.png';
import TwitchPic from '../../../public/images/Twitch.png';
import YoutubePic from '../../../public/images/Youtube.png';

const DrawerMenu = ({ drawer, setDrawer }) => {
  return (
    <WrapperAll>
                <WrapperDrawer>
                    <WrapperLink>
                        <WrapperSousLinkTitle>
                            <Link href='/about'>
                               <a onClick={()=>setDrawer(!drawer)}>A propos</a>
                            </Link>
                        </WrapperSousLinkTitle>
                        <WrapperSousLink>
                            <WrapperSousLinkUnit>
                                <Link href="/mars">Mars</Link>
                            </WrapperSousLinkUnit>
                            <WrapperSousLinkUnit>
                                <Link href="/work">Work</Link>
                            </WrapperSousLinkUnit>
                            <WrapperSousLinkUnit>
                                <Link href="/avis">Avis</Link>
                            </WrapperSousLinkUnit>
                        </WrapperSousLink>
                    </WrapperLink>
                    <WrapperLink>
                        <WrapperSousLinkTitle>
                            <Link href="/store">Store</Link>
                        </WrapperSousLinkTitle>
                        <WrapperSousLink>
                            <WrapperSousLinkUnit>
                                <Link href="/products">Appareils</Link>
                            </WrapperSousLinkUnit>
                            <WrapperSousLinkUnit>
                                <Link href="/accesories">Accessoires</Link>
                            </WrapperSousLinkUnit>
                            <WrapperSousLinkUnit>
                                <Link href="/sound">Son</Link>
                            </WrapperSousLinkUnit>
                        </WrapperSousLink>
                    </WrapperLink>
                    <WrapperLink>
                        <WrapperSousLinkTitle>
                            <Link href="/location">Location</Link>
                        </WrapperSousLinkTitle>
                        <WrapperSousLink>
                            <WrapperSousLinkUnit>
                                <Link href="/cgu">Conditions</Link>
                            </WrapperSousLinkUnit>
                            <WrapperSousLinkUnit>
                                <Link href="/prices">
                                <a onClick={() => setDrawer(!drawer)}>Tarifs</a>
                                </Link>
                            </WrapperSousLinkUnit>
                        </WrapperSousLink>
                    </WrapperLink>
                    <WrapperLink>
                        <WrapperSousLinkTitle>
                            <Link href="/contact">
                            <a onClick={() => setDrawer(!drawer)}>Contact</a>
                            </Link>
                        </WrapperSousLinkTitle>
                        <WrapperSousLink>
                            <WrapperSousLinkUnit>
                                <Link href="/networks">
                                    <a onClick={() => setDrawer(!drawer)}>Réseaux</a>
                                </Link>
                            </WrapperSousLinkUnit>
                            <WrapperSousLinkUnit>
                                <Link href="/partners">
                                    <a onClick={() => setDrawer(!drawer)}>Partenaires</a>
                                </Link>
                            </WrapperSousLinkUnit>
                        </WrapperSousLink>
                    </WrapperLink>
                </WrapperDrawer>

                <WrapperRightPart>
                    <WrapperTop>
                        <Title>Adresse</Title>
                        <Description>102 Cours Franklin Roosvelt 33000 Bordeaux</Description>
                    </WrapperTop>

                    <WrapperDown>
                        <Title>Suivez-nous</Title>
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
    )
}

export default withRouter(DrawerMenu)