import React from 'react';
import { getAuth, signOut, User } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

interface NavBarProps {
  user: User | null;
}

export function NavBar({ user }: NavBarProps) {
  const navigate = useNavigate();
  async function onClickSignOut() {
    const auth = getAuth();
    signOut(auth);
    navigate('/sign-in');
  }

  function onClickSignIn() {
    navigate('/sign-in');
  }

  return (
    <nav>
      <Link to="">
        <h1 className="app-heading">Members-Only App</h1>
      </Link>
      {user ? (
        <>
          <button className="sign-out-button" onClick={onClickSignOut}>
            Sign Out
          </button>
          <p className="logged-in-as space-before">Logged in as {user.email}</p>
        </>
      ) : (
        <button className="sign-out-button" onClick={onClickSignIn}>
          Sign in
        </button>
      )}
    </nav>
  );
}
