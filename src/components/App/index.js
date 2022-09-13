import './App.scss';
import React from 'react';
import { HashRouter, Routes, Route }  from 'react-router-dom'
import { Menu as MenuPage } from '../MenuPage';
import { HomePage } from '../HomePage/'
import { BlogPage } from '../BlogPage/'
import { BlogPostPage} from '../BlogPostPage'
import { ProfilePage } from '../ProfilePage/'


function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <MenuPage />

        <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/blog/" element={ <BlogPage/> } />
          <Route path="/blog/:slug" element={ <BlogPostPage/> } />
          <Route path="/profile" element={ <ProfilePage/> } />
          <Route path="*" element={ <p>Not found</p> } />
        </Routes>
      </HashRouter>
    </React.Fragment>
  )
}

export default App;
