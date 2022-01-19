import { useRouter, withRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import useTranslation from '../../../hooks/useTranslation';
import BurgerMenu, { BurgerMenuItem, TopSpan, MidSpan, BotSpan} from './MainMenu.style';

const MainMenu = ({ className, isLoggedIn, visible, setVisible }) => {
    const { t } = useTranslation();
    const router = useRouter();
    const { locale, query } = router;
    const [language, setLanguage] = useState(null);

    return (
        <BurgerMenu>
            <BurgerMenuItem onClick={() => setVisible(!visible)}>
                <TopSpan></TopSpan>
                <MidSpan></MidSpan>
                <BotSpan></BotSpan>
            </BurgerMenuItem>
        </BurgerMenu>
    )
}

export default withRouter(MainMenu);
