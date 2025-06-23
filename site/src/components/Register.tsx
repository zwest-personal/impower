import {Alert, Button, FormControl, InputLabel, OutlinedInput, Snackbar} from "@mui/material";
import {Text} from "../common/styles.ts";
import {useState} from "react";
import {UsersService} from "../services/users.tsx";

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

    return (
        <form onSubmit={onSubmit} className="card (">
            <FormControl sx={{m: 1, width: '25ch'}} variant="outlined">
                <InputLabel style={Text} htmlFor="outlined-email-helper-text">Email</InputLabel>
                <OutlinedInput
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
            <FormControl sx={{m: 1, width: '25ch'}} variant="outlined">
                <InputLabel style={Text} htmlFor="outlined-fullname-helper-text">Full Name</InputLabel>
                <OutlinedInput
                    style={Text}
                    id="fullname"
                    type='text'
                    label="Full Name"
                    onChange={e => setFullName(e.target.value)}
                />
            </FormControl>
            <FormControl sx={{m: 1, width: '15ch'}} variant="outlined">
                <Button variant="outlined" color="error" size="large" type="submit">Register</Button>
            </FormControl>
            <FormControl sx={{m: 1, width: '15ch'}} variant="outlined">
                <Button variant="outlined" color="error" size="large"
                        onClick={() => setRegister(false)}>Return to Login</Button>
            </FormControl>
            <Snackbar open={!!registerError} autoHideDuration={3000}>
                <Alert
                    severity='error'
                    sx={{ width: '100%' }}
                >
                    {registerError}
                </Alert>
            </Snackbar>
        </form>
    )
}