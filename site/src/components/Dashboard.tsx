import * as React from 'react';
import {AppProvider, type Navigation} from '@toolpad/core/AppProvider';
import {Outlet} from 'react-router';
import GroupsIcon from "@mui/icons-material/Groups";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import imp from '/imp.svg'
import {ReactRouterAppProvider} from '@toolpad/core/react-router';
import {Box} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'campaigns',
    title: 'Campaigns',
    icon: <GroupsIcon/>,
  },
  {
    segment: 'notes',
    title: 'Notes',
    icon: <SpeakerNotesIcon/>,
  }
];

const BRANDING = {
  title: 'ImPower',
  logo: <img src={imp} className="logo" alt="ImPower logo"/>
};

export default function Dashboard() {
  return (
    <Box width={1}>
        <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
          <Outlet/>
        </ReactRouterAppProvider>
    </Box>
  );
}
