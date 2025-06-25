import {it} from '@jest/globals';
import Login from "./Login";

import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

it('Basic Renderer Check', async () => {
  const setSession = jest.fn();

  render(<Login  setSession={setSession}/>)

  await userEvent.click(screen.getByText('Register'))
  await screen.getByText('Return to Login')

  expect(screen.getByText('Register')).toBeVisible()
  expect(screen.getByText('Return to Login')).toBeVisible()
});