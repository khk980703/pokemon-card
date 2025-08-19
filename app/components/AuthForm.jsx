'use client'

import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function AuthForm() {
  const [isNewUser, setIsNewUser] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [isSigningUp, setIsSigningUp] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log('You are logged in!')
    // handleLogin
  }

  const handleSignUp = async (e) => {
    e.preventDefault('You are signed up!')
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (!error) setIsSigningUp(true)
    console.log({ data, error })
  }

  let signInMessage = 'Sign In'

  if (isSigningIn) {
    signInMessage = 'Signing In'
  } else if (isNewUser) {
    signInMessage = 'Sign Up'
  }

  const signUpMessage = <p>Email sent! Check your email to confirm sign up.</p>

  return (
    <form onSubmit={isNewUser ? handleSignUp : handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className=""
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className=""
      />
      <button type="submit">{signInMessage}</button>
      <p>
        {isNewUser ? (
          <>
            Already have an account?{' '}
            <button type="button" onClick={() => setIsNewUser(false)}>
              Sign In
            </button>
          </>
        ) : (
          <>
            Don't have an account?{' '}
            <button type="button" onClick={() => setIsNewUser(true)}>
              Sign Up
            </button>
          </>
        )}
      </p>
      {isSigningUp && signUpMessage}
    </form>
  )
}
