import './BlogPostPage.scss'
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { blogdata } from '../middleware/getBlockData';

export function BlogPostPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const blogpost = blogdata.find(post => post.slug === slug)

  const onClink = () => {
    navigate('/blog')
  }
  
  return (
    <React.Fragment>
      <h2>{blogpost.title}</h2>
      <p>{blogpost.content}</p>
      <p>{blogpost.author}</p>
      <button onClick={onClink}>atrás</button>
    </React.Fragment>
  )
}
