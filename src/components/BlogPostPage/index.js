import './BlogPostPage.scss'
import React from 'react';
import { Link, useParams } from 'react-router-dom'
import { blogdata } from '../middleware/getBlockData';

export function BlogPostPage() {
  const { slug } = useParams();
  const blogpost = blogdata.find(post => post.slug === slug)
  
  return (
    <React.Fragment>
      <h2>{blogdata.title}</h2>
      <p>{blogpost.content}</p>
      <p>{blogpost.author}</p>
    </React.Fragment>
  )
}
