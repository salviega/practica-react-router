import './BlogPage.scss'
import React from 'react';

import { BlogLinkPage } from '../BlogLinkPage';
import { blogdata } from '../middleware/getBlockData';

export function BlogPage() {

  return (
    <React.Fragment>
      <h1>BlogPage</h1>
      <ul>
        {blogdata.map((post, index) => (
          <BlogLinkPage key={index} post={post} />
        ))}
      </ul>
    </React.Fragment>
  )
}
