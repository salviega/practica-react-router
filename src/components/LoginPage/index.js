import "./LoginPage.scss";
import React from "react";
import { useAuth } from '../App/auth';

export function LoginPage() {
  const auth = useAuth()
  const [username, setUsername] = React.useState("");
  const onLogin = (e) => {
    e.preventDefault();
    auth.login(username)
    console.log(auth.user)
  };
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
