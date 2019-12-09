import React from 'react';
import { Link } from 'react-router-dom';

import './styles/NotFound.css';

function NotFound() {
  return (
    <div className="Redirect">
      <h1 className="Redirect-title">404: Not Found</h1>
      <p>¡Ups! La página solicitada no fue encontrada</p>
      <Link className="btn btn-primary" to="/">
        Volver a la página principal
      </Link>
    </div>
  );
}

export default NotFound;
