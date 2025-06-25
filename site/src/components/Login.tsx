import {Alert, Button, FormControl, InputLabel, OutlinedInput} from "@mui/material";
import {Text} from "../common/styles.ts";
import {type FormEvent, useState} from "react";
import {UsersService} from "../services/users.tsx";
import Register from "./Register.tsx";
import ErrorPopup from "./widgets/ErrorPopup.tsx";
import imp from '@public/imp.svg'

import {makeStyles} from '@mui/styles';
import {AxiosError} from "axios";

const useStyles = makeStyles({
  logo: {
    // padding: 0
    height: '40ch'
  },
  wrapper: {
    margin: "0 auto",
  },
  root: {
    background: '#121212',
    border: 0,
    color: 'white',
    padding: '0 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexSpacing: "5px"
  },
  item: {
    flexSpacing: "5px",
    color: "white",
    borderColor: "white",
    width: '40ch',
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "maroon",
      borderWidth: "1px",
    },
  }

});

export default function Login({setSession}: { setSession: Function }) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [register, setRegister] = useState<boolean>(false)
  const [registerSuccess, setRegisterSuccess] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string>('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const sessionDetails = await UsersService.login(
        email,
        password
      );
      setSession(sessionDetails.data);
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        setLoginError(e?.response?.data.message);
      }
    }
  }

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div>
        <img src={imp} className={classes.logo} alt="ImPower logo"/>
      </div>
      {register ? <Register setRegister={setRegister} setRegisterSuccess={setRegisterSuccess}/> :
        <form onSubmit={onSubmit} className={classes.root}>
          <FormControl className={classes.item} variant="outlined">
            <InputLabel style={Text} htmlFor="outlined-email-helper-text">Email</InputLabel>
            <OutlinedInput
              fullWidth
              style={Text}
              id="email"
              aria-describedby="email-helper-text"
              label="Email"
              onChange={e => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl className={classes.item} variant="outlined">
            <InputLabel style={Text} htmlFor="outlined-password-helper-text">Password</InputLabel>
            <OutlinedInput
              style={Text}
              id="password"
              type='password'
              label="Password"
              onChange={e => setPassword(e.target.value)}
            />
          </FormControl>
          <div className={classes.item}>
            <FormControl variant="outlined" sx={{m: 1, width: '25ch'}}>
              <Button variant="outlined" color="success" size="large" type="submit">Login</Button>
            </FormControl>
            {(registerSuccess) ?
              <Alert severity="success">
                Registration Successful! Please log in.
              </Alert>
              :
              <FormControl variant="outlined" sx={{m: 1, width: '25ch'}}>
                <Button variant="outlined" color="error" size="large"
                        onClick={() => setRegister(true)}>Register</Button>
              </FormControl>
            }
          </div>
        </form>
      }
      <ErrorPopup error={loginError} setError={setLoginError}/>
    </div>
  )
}