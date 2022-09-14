import './LogoutPage.scss'
import React from 'react';
import { useAuth } from '../App/auth';

export function LogoutPage() {
  const auth = useAuth()

  const onLogout = (e) => {
    e.preventDefault()
    auth.logout()
  }

  return (
    <React.Fragment>
      <h1>Logout</h1>
      <form onSubmit={onLogout}>
        <label>¿Seguro que quieres salir?</label>
        <button type="submit">Salir</button>
      </form>
    </React.Fragment>
  );
}