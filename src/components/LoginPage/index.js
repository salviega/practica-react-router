import "./LoginPage.scss";
import React from "react";
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

export function LoginPage() {
  const auth = useAuth()
  const [username, setUsername] = React.useState("");
  const onLogin = (e) => {
    e.preventDefault();
    auth.login({username})
  };

  if (auth.user) return <Navigate to='/login'/>
  
  return (
    <React.Fragment>
      <h1>Login</h1>
      <form onSubmit={onLogin}>
        <label>Escribe tu nombre de usuario:</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </React.Fragment>
  );
}
