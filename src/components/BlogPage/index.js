import './BlogPage.scss'
import React from 'react';
import { Link, Outlet } from 'react-router-dom'

import { blogdata } from '../../middleware/getBlockData';

export function BlogPage() {

  return (
    <React.Fragment>
      <h1>BlogPage</h1>
      <ul>
        {blogdata.map((post, index) => (
          <li key={index}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </React.Fragment>
  )
}
