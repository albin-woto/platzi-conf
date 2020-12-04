## <img src="./src/images/logo.svg" alt="logo" height="24px"> Platzi Conf by [@albin-woto](https://www.linkedin.com/in/albin-wotoszyn)

Platzi conf badge creator  
Disclaimer! This is a practice project only. Bootstrap and API code was taken from a course project of [Platzi](https://platzi.com/).

---

The site was deplyed in Vercel, you can see it [here.](https://platzi-conf-three.vercel.app/badges/new)  
Because I'm currently using [My JSON Server](https://my-json-server.typicode.com/) as a fake online REST, the changes in the 'database' aren't permanent. The next step is to connect the app to a real DB 🚀.

---

### Stack

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/albin-woto/blog-redux/master/public/react.png" alt="react-logo" height="24px"></a>
React  
A JavaScript library for building user interfaces.

<a href="https://getbootstrap.com/"><img src="https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png" alt="bootstrap-logo" height="24px"></a>
Bootstrap  
Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugin

<a href="https://webpack.js.org/"><img src="https://raw.githubusercontent.com/webpack/media/master/logo/icon.png" alt="webpack-logo" height="24px"></a>
Webpack  
A highly configurable module bundler for modern JavaScript applications.

[MD5](https://www.npmjs.com/package/md5)  
A JavaScript function for hashing messages with MD5. In this case used for the avatars generated from [gravatar](https://gravatar.com).

[JSON server](https://www.npmjs.com/package/json-server)  
Get a full fake REST API.

---

### Available Scripts

> If you want to run it locally, you have to change the BASE_URL in api.js to localhost:3001, as pointed in the file.

In the project directory, you can run:

#### `npm run server`

Runs the json-server where the app makes the requests.

#### `npm run build-dev`

Runs the app in the development mode.<br />
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

#### `npm run build-dll`

Builds the dlls files for production into the `dist` folder.

#### `npm run build`

Builds the app for production into the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
