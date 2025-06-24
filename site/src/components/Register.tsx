import {Alert, Button, FormControl, InputLabel, OutlinedInput, Snackbar} from "@mui/material";
import {Text} from "../common/styles.ts";
import {useState} from "react";
import {UsersService} from "../services/users.tsx";
import ErrorPopup from "./widgets/ErrorPopup.tsx";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
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
  },
  item: {
    width: '40ch',
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "maroon",
      borderWidth: "1px",
    }
  }
});


export default function Create({setRegister, setRegisterSuccess}: {
    setRegister: Function,
    setRegisterSuccess: Function
}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');

    const [registerError, setRegisterError] = useState('');

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await UsersService.create({
                email,
                fullName,
                password
            });
            setRegister(false)
            setRegisterSuccess(true)
        }
        catch (e) {
            setRegisterError(e.response.data.message)
        }

    }

  const classes = useStyles();

  return (
        <form onSubmit={onSubmit} className={classes.root}>
            <FormControl className={classes.item} variant="outlined">
                <InputLabel style={Text} htmlFor="outlined-email-helper-text">Email</InputLabel>
                <OutlinedInput
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
            <FormControl className={classes.item} variant="outlined">
                <InputLabel style={Text} htmlFor="outlined-fullname-helper-text">Full Name</InputLabel>
                <OutlinedInput
                    style={Text}
                    id="fullname"
                    type='text'
                    label="Full Name"
                    onChange={e => setFullName(e.target.value)}
                />
            </FormControl>
            <div  className={classes.item}>
              <FormControl sx={{m: 1, width: '25ch'}} variant="outlined">
                <Button variant="outlined" color="error" size="large" type="submit">Register</Button>
              </FormControl>
              <FormControl sx={{m: 1, width: '25ch'}} variant="outlined">
                <Button variant="outlined" color="cancel" size="large"
                        onClick={() => setRegister(false)}>Return to Login</Button>
              </FormControl>
            </div>
            <ErrorPopup error={registerError} setError={setRegisterError} />

        </form>
    )
}