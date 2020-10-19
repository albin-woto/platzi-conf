import React from 'react';
import { Link } from 'react-router-dom';

import './styles/NotFound.css';

function NotFound() {
  return (
    <div className="Redirect">
      <h1 className="Redirect-title">404: Not Found</h1>
      <p>¡Ups! Page Not Found</p>
      <Link className="btn btn-primary" to="/">
        Home
      </Link>
    </div>
  );
}

export default NotFound;
