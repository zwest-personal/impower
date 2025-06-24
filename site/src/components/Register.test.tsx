import {useState} from "react";
import renderer from 'react-test-renderer';
import {it, describe, expect, test} from '@jest/globals';
import Register from "./Register";

it('Testing the tests', () => {
  const [register, setRegister] = useState<boolean>(false)
  const [registerSuccess, setRegisterSuccess] = useState<boolean>(false);

  const component = renderer.create(
    <Register setRegister={setRegister} setRegisterSuccess={setRegisterSuccess}/>
  );

});