import React from 'react';
import { Link } from 'react-router-dom';

import './styles/PageError.css';

function PageError(props) {
  return (
    <div className="PageError">
      <h1 className="PageError-title">{props.error.message}</h1>
      <p>¡Ups! Parece que hubo un error</p>
      <Link className="btn btn-primary" to="/">
        Volver a la página principal
      </Link>
    </div>
  );
}

export default PageError;
