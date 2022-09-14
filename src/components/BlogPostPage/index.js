import './BlogPostPage.scss'
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { blogdata } from '../../middleware/getBlockData';
import { useAuth } from '../../hooks/auth';

export function BlogPostPage() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const auth = useAuth()

  const blogpost = blogdata.find(post => post.slug === slug)

  const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username

  const onClink = () => {
    navigate('/blog')
  }
  
  return (
    <React.Fragment>
      <h2>{blogpost.title}</h2>
      <p>{blogpost.content}</p>
      <p>{blogpost.author}</p>
      <button onClick={onClink}>atrás</button>
      {canDelete && (
        <button>Eliminar blogpost</button>
      )}
    </React.Fragment>
  )
}
