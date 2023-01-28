import { useRoutes } from 'react-router-dom';

import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// project import
import MainLayout from 'layout/MainLayout';

const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/Demo/SamplePage')));

// render - utilities
const Stock = Loadable(lazy(() => import('pages/Markets/Stock')));
const Feature = Loadable(lazy(() => import('pages/Markets/Feature')));
const Shadow = Loadable(lazy(() => import('pages/Demo/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/Demo/AntIcons')));
const StockBackTest = Loadable(lazy(() => import('pages/Markets/StockBackTest')));
const ZenConfig = Loadable(lazy(() => import('pages/Config/ZenConfig')));
const Stragegy = Loadable(lazy(() => import('pages/Config/Stragegy')));

const LoginRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: 'login',
            element: <AuthLogin />
        },
        {
            path: 'register',
            element: <AuthRegister />
        }
    ]
};

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'feature',
            element: <Feature />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'shadow',
            element: <Shadow />
        },

        {
            path: 'stockBackTest',
            element: <StockBackTest />
        },

        {
            path: 'Stock',
            element: <Stock />
        },

        {
            path: 'ZenConfig',
            element: <ZenConfig />
        },
        {
            path: 'Stragegy',
            element: <Stragegy />
        },

        {
            path: 'icons/ant',
            element: <AntIcons />
        }
    ]
};

export default function ThemeRoutes() {
    return useRoutes([MainRoutes, LoginRoutes]);
}
