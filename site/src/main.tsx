import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import Layout from './layouts/Default.tsx';

import Notes from './components/Notes';
import Dashboard from './components/Dashboard';
import Campaigns from './components/Campaigns';

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body {
        background: #121212;
    }
    #root {
        background: #121212;
    }
`

const router = createBrowserRouter([
    {
        Component: App,
        children: [
            {
                path: '/',
                Component: Layout,
                children: [
                    {
                        path: '',
                        Component: Dashboard,
                    },
                    {
                        path: 'notes/*',
                        Component: Notes,
                    },
                    {
                        path: 'campaigns/*',
                        Component: Campaigns,
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <GlobalStyle />
    </React.StrictMode>
);