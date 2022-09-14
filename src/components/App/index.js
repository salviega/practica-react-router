import './App.scss';
import React from 'react';
import { HashRouter, Routes, Route }  from 'react-router-dom'
import { AuthProvider, AuthRoute } from '../../hooks/auth'
import { MenuPage } from '../MenuPage';
import { HomePage } from '../HomePage/'
import { BlogPage } from '../BlogPage/'
import { BlogPostPage} from '../BlogPostPage'
import { ProfilePage } from '../ProfilePage/'
import { LoginPage } from '../LoginPage';
import { LogoutPage } from '../LogoutPage';


function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <AuthProvider>
        <MenuPage />
        <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/blog" element={ <BlogPage/> }>
            <Route path=":slug" element={ <BlogPostPage/> } />
          </Route>
          <Route path="/login" element={ <LoginPage/> } />
          <Route path="/logout" element={ <AuthRoute><LogoutPage/></AuthRoute> } />
          <Route path="/profile" element={ <AuthRoute><ProfilePage/></AuthRoute> } />
          <Route path="*" element={ <p>Not found</p> } />
        </Routes>
        </AuthProvider>
      </HashRouter>
    </React.Fragment>
  )
}

export default App;
