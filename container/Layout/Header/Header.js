import React, {useState, useContext} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Sticky from 'react-stickynode';
import { useRouter, withRouter } from 'next/router';
import { Select, Button, Drawer } from 'antd';
import Navbar from '../../../components/Navbar/Navbar';
import HeaderWrapper, { LogoArea, MobileNavbar } from './Header.style';
import dynamic from 'next/dynamic';
import useTranslation from '../../../hooks/useTranslation';
import LogoPic from '../../../public/images/Logo.jpg';

const AuthMenu = dynamic(() => import('./AuthMenu'));
const MainMenu = dynamic(() => import('./MainMenu'));
const MobileMenu = dynamic(() => import('./MobileMenu'));
const ProfileMenu = dynamic(() => import('./ProfileMenu'));

const Header = ({ user, isLoggedIn }) => {

    const router = useRouter();
    const { locale } = router;
    const [visible, setVisible] = useState(false);
    const [language, setLanguage] = useState(null);
    var username;

    const sideBarHandler = () => {
        setVisible(!visible);
    }
    
    const { Option } = Select;

    const headerType = router.pathname === "/" ? "default" : "default";
    const auth = typeof user === 'string' ? JSON.parse(user) : user;
    const { t } = useTranslation();

    const handleChangeLocale = key => {
        router.push(router.asPath, router.asPath, { locale: key });
        setLanguage(key);
    }

    return (
        <HeaderWrapper>
            <Sticky top={0} innerZ={1001} enableTransforms={false} activeClass='isHeaderSticky'>
                <Navbwar 
                    user={user}
                    logo={
                        <Link href="/" prefetch={false} locale={locale}>
                            <a>
                                <Image src={LogoPic} width={100} height={100} />
                            </a>
                        </Link>
                    }
                    navMenu={<MainMenu visible={visible} setVisible={setVisible} />}
                    authMenu={<AuthMenu />} 
                    isLogin={isLoggedIn}
                    visible={visible}
                    avatar={
                        <Image />
                    }
                    profileMenu={
                        <ProfileMenu 
                            user={user}
                        />
                    }
                    headerType={headerType}
                    location={router}
                    // searchVisibility={}
                />

                {/* La on passe sur le mode mobile de la Navbar */}
                <MobileNavbar>
                    <LogoArea>
                        <a href='/'>

                        </a>
                    </LogoArea>
                </MobileNavbar>
            </Sticky>
        </HeaderWrapper>
        
    )
}

export default withRouter(Header)
