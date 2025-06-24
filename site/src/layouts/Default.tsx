import * as React from 'react';
import {Outlet} from 'react-router';
import {DashboardLayout} from '@toolpad/core/DashboardLayout';
import {PageContainer} from '@toolpad/core/PageContainer';
import {CssBaseline} from '@mui/material';

import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
    body {
        background: #121212;
        margin: 0;
        padding: 0;
    }
    #root {
        background: #121212;
        margin: 0;
        padding: 0;
    }
`

export default function Layout() {

  return (
    <CssBaseline>
      <DashboardLayout
        slots={{
        toolbarActions: () => null,
        }}>
        <PageContainer>
          <Outlet/>
        </PageContainer>
      </DashboardLayout>
      <GlobalStyle/>
    </CssBaseline>
  );
}