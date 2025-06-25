import {type Navigation} from '@toolpad/core/AppProvider';
import {Outlet} from 'react-router';
import GroupsIcon from "@mui/icons-material/Groups";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import Imp from '@src/assets/imp.svg'
import {ReactRouterAppProvider} from '@toolpad/core/react-router';
import {Box} from '@mui/material';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
  logo: {
    padding: 0,
    width: '40px',
    height: '40px',
  },
  theme: {
    color: "maroon"
  }
})

const nav: Navigation = [
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

export default function Dashboard() {
  const classes = useStyles();

  const branding = {
    title: 'ImPower',
    logo:
      <div className={classes.logo} title="ImPower">
        <Imp />
      </div>
  };

  return (
    <Box width={1}>
        <ReactRouterAppProvider navigation={nav} branding={branding} >
          <Outlet/>
        </ReactRouterAppProvider>
    </Box>
  );
}
