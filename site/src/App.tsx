// import { useState } from 'react'
import imp from '/imp.svg'
import './App.css'
import {FormControl, InputLabel, OutlinedInput} from "@mui/material";
import {Text} from "./common/styles.ts";

function App() {
  return (
    <>
      <div>
          <img src={imp} className="logo" alt="ImPower logo" />
      </div>
      <h1>ImPower</h1>
      <div className="card">
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel style={Text} htmlFor="outlined-email-helper-text">Email</InputLabel>
              <OutlinedInput
                  style={Text}
                  id="email"
                  aria-describedby="email-helper-text"
                  label="Email"

              />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel style={Text} htmlFor="outlined-password-helper-text">Password</InputLabel>
              <OutlinedInput
                  style={Text}
                  id="password"
                  type='password'
                  label="Password"
              />
          </FormControl>
      </div>
    </>
  )
}

export default App
