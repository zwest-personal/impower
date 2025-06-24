import {Alert, Button, FormControl, InputLabel, OutlinedInput} from "@mui/material";
import {Text} from "../common/styles.ts";
import {useState} from "react";
import {UsersService} from "../services/users.tsx";
import Register from "./Register.tsx";
import ErrorPopup from "./widgets/ErrorPopup.tsx";
import imp from '/imp.svg'

import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    root: {
        background: '#121212',
        border: 0,
        color: 'white',
        padding: '0 30px',
        flex: 1
    },
});

export default function Login({setSession}: {setSession: Function}) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [register, setRegister] = useState<boolean>(false)
    const [registerSuccess, setRegisterSuccess] = useState<boolean>(false);
    const [loginError, setLoginError] = useState<string>('');


    const onSubmit = async e => {
        e.preventDefault();
        try {
            const sessionDetails = await UsersService.login(
                email,
                password
            );
            setSession(sessionDetails.data);
        } catch (e) {
            setLoginError(e.response.data.message);
        }
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <img src={imp} className="logo" alt="ImPower logo" />
            </div>
        {register ? <Register setRegister={setRegister} setRegisterSuccess={setRegisterSuccess}/> :
            <form onSubmit={onSubmit} className="card">
                <FormControl sx={{m: 1, width: '25ch'}} fullWidth={true} variant="outlined" >
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
                <FormControl sx={{m: 1, width: '25ch'}} variant="outlined">
                    <InputLabel style={Text} htmlFor="outlined-password-helper-text">Password</InputLabel>
                    <OutlinedInput
                        style={Text}
                        id="password"
                        type='password'
                        label="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </FormControl>
                <FormControl sx={{m: 1, width: '15ch'}} variant="outlined">
                    <Button variant="outlined" color="error" size="large" type="submit">Login</Button>
                </FormControl>
                {(registerSuccess) ?
                    <Alert severity="success">
                        Registration Successful! Please log in.
                    </Alert>
                    :
                    <FormControl sx={{m: 1, width: '15ch'}} variant="outlined">
                        <Button variant="outlined" color="error" size="large"
                                onClick={() => setRegister(true)}>Register</Button>
                    </FormControl>
                }
            </form>
            }
            <ErrorPopup error={loginError} setError={setLoginError} />
        </div>
    )
}