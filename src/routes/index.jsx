import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './public';
import PrivateRoutes from './private';
    
const Router = () => {
    const session = localStorage.getItem('token'); 
    
    console.log(session)
    return (
      <BrowserRouter basename='/sketch-manager-FE'>
        {session ? <PrivateRoutes /> : <PublicRoutes />}
      </BrowserRouter>
    );
  };
  
export default Router;