import './ProfilePage.scss'
import React from 'react';
import { useAuth } from '../../hooks/auth';

export function ProfilePage() {
  const auth = useAuth()

  return (
    <React.Fragment>
      <h1>{auth.user.username}</h1>
    </React.Fragment>
  )
}
