'use client'

import { Layout, Menu } from 'antd';
import Link from 'next/link';
// import { useRouter } from 'next/router';

const { Header } = Layout;

export default function Navbar() {
    // const router = useRouter();

    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    // selectedKeys={[router.pathname]}
                >
                    <Menu.Item key="/">
                        <Link href="/">Home</Link>
                    </Menu.Item>

                    <Menu.Item key="/api/auth/signin">
                        <Link href="/api/auth/signin">Sign In</Link>
                    </Menu.Item>

                    <Menu.Item key="/api/auth/signout">
                        <Link href="/api/auth/signout">Sign Out</Link>
                    </Menu.Item>

                    <Menu.Item key="/server">
                        <Link href="/server">Server</Link>
                    </Menu.Item>

                    <Menu.Item key="/dashboard">
                        <Link href="/dashboard">Dashboard</Link>
                    </Menu.Item>

                    <Menu.Item key="/extra">
                        <Link href="/extra">Extra</Link>
                    </Menu.Item>
                </Menu>
            </Header>
        </Layout>
    );
};
