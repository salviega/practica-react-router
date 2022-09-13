import './BlogLinkPage.scss'
import React from 'react';
import { Link } from 'react-router-dom'

export function BlogLinkPage({ post }) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  )
}
