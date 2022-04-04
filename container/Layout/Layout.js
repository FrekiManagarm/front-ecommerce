import { Layout, Drawer } from "antd"
import { useState } from "react";
import DrawerMenu from "./Header/DrawerMenu";
import dynamic from 'next/dynamic';
import { useRouter, withRouter } from "next/router";
import LayoutProvider from "../../context/LayoutProvider";

const Footer = dynamic(() => import('./Footer/Footer'));
const Header = dynamic(() => import('./Header/Header'));

const { Content } = Layout;

const LayoutWrapper = ({ children, user, isLoggedIn }) => {
    if (typeof user === 'string') user = JSON.parse(user);
    const [drawer, setDrawer] = useState(false);

    const router = useRouter();

    return (
        <Layout>
            <LayoutProvider>
                {router.pathname === '/' ||
                router.pathname === '/configurator' ||
                router.pathname === '/products' ||
                router.pathname === '/products/[id]' ||
                router.pathname === '/dashboard' ||
                router.pathname === '/login' ||
                router.pathname === '/about' ||
                router.pathname === '/registration' ? (
                    <>
                        <Drawer
                            placement='top'
                            visible={drawer}
                            closable
                            onClose={() => setDrawer(!drawer)}
                            height={1024}
                        >
                            <DrawerMenu />
                        </Drawer>
                        <Header user={user} isLoggedIn={isLoggedIn} drawer={drawer} setDrawer={setDrawer} />
                        <Content>{children}</Content>
                        {router.pathname === '/' ||
                        router.pathname === '/dashboard' ||
                        router.pathname === '/about' 
                        
                    ? (<Footer />)
                    : null}
                    </>
                ) : (
                    <>
                        <Content>{children}</Content>
                        {router.pathname.split("/")[1] == "dashboard" ? <Footer /> : null}
                    </>
                )}
            </LayoutProvider>
        </Layout>
    )
}

export default withRouter(LayoutWrapper)
