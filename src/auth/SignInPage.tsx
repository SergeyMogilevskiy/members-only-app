import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, AuthError } from 'firebase/auth';

export function SignInPage() {
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [signInError, setSignInError] = useState<string>('');
  const navigate = useNavigate();

  async function onClickSignIn(e: FormEvent) {
    e.preventDefault();
    try {
      setSignInError('');

      const auth = getAuth();
      await signInWithEmailAndPassword(auth, emailValue, passwordValue);
      navigate('/');
    } catch (e) {
      console.log(e);
      setSignInError((e as AuthError).message);
    }
  }

  return (
    <div className="full-height-page">
      <form className="centered-container space-before" onSubmit={onClickSignIn}>
        {signInError && (
          <div>
            <p className="error-message">{signInError}</p>
          </div>
        )}
        <input
          type="text"
          value={emailValue}
          placeholder="Email"
          className="full-width space-after"
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <input
          type="password"
          value={passwordValue}
          placeholder="Password"
          className="full-width space-after"
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <button className="full-width" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}
