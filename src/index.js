// <--- Código que se usaría con JS

// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

// <--- Código que se usaría con React

import React from "react";
import ReactDOM from "react-dom";

// Usando JSX
const name = "Albin";
const elementJSX = (<div>
        <h1>Hola, Soy {name}</h1>
        <p>
            Estoy aprendiendo desarrollo de software.
        </p>
    </div>
);


// Usando React
// Ej de elementos con react
// const element = React.createElement('a', { href : 'https://platzi.com'}, 'Ir a platzi');

const element = React.createElement(
    "div",
    {},
    React.createElement('h1', {},`Hola, soy ${name}`),
    React.createElement('p', {}, 'Estoy aprendiendo a desarrollar.')
);

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);
