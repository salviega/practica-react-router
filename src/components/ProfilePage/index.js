import './ProfilePage.scss'
import React from 'react';
import { useAuth } from '../App/auth';

export function ProfilePage() {
  const auth = useAuth()
  return (
    <h1>{auth.user.username}</h1>
  )
}
