# React-Router Wizard!

### Learn
**How to deploy react-router efficiently?**

Don't Worry!

Follow the Instructions below

--- 
### Installing React-Router
**Create a react app using vite engine**
```bash
npm create vite@latest
```
- **Choose directory** : my-app | `.` for using current directory
- **Framework** : React
- **Language** : Javascript

```bash
npm install
```
**Install react-router**
```bash
npm install react-router-dom
```
---
**Initialize TailwindCSS**

Let's Initialize the project as a tailwind project using the commands
```bash
npm install -D tailwindcss postcss autoprefixer
```
```bash
npx tailwindcss init -p
```
---
**Create a file as index.js**

**Note**: Create this file in outermost directory.

**index.js**
```js
import fs, { mkdir } from 'fs'

// ------------------------------------------ Updating tailwind.config.js -----------------------------------

const configData = `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`
fs.writeFile('tailwind.config.js', configData, ()=>console.log("tailwind.config.js has been updated!"))

// ------------------------------------------ Creating directory -----------------------------------

mkdir('src/components', ()=>console.log("components directory has been created!"))

// ------------------------------------------ Creating Navbar.jsx ----------------------------------

const NavbarJSX = `import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-6 bg-black'>
        <div className="logo font-extrabold text-xl text-white">REACT-Router</div>
      <ul className='flex p-4 gap-3 text-white font-semibold'>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        <li>
            <Link to="/faq">FAQ</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar`

fs.writeFile('src/components/Navbar.jsx', NavbarJSX, ()=>console.log("Navbar.jsx has been created!"))

// ---------------------------------------- Home.jsx ---------------------------------------

const HomeJSX = `import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container h-[90vh] flex items-center justify-center">
        <h1 className="text-5xl text-center">You are on home page!</h1>
      </div>
    </div>
  );
};

export default Home;`

fs.writeFile('src/components/Home.jsx', HomeJSX, ()=>console.log("Home.jsx has been craeted!"))

// -------------------------------------- About.jsx --------------------------------

const AboutJSX = `import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container h-[90vh] flex items-center justify-center">
        <h1 className="text-5xl text-center">You are on About page!</h1>
      </div>
    </div>
  );
};

export default About;`

fs.writeFile('src/components/About.jsx', AboutJSX, ()=>console.log("About.jsx has been created!"))

// -------------------------------------- Contact.jsx ---------------------------------

const ContactJSX = `import React from "react";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container h-[90vh] flex items-center justify-center">
        <h1 className="text-5xl text-center">Contact page!</h1>
      </div>
    </div>
  );
};

export default Contact;`

fs.writeFile('src/components/Contact.jsx', ContactJSX, ()=>console.log("Contact.jsx has been created!"))

// ---------------------------------------- Faq.jsx -----------------------------------------

const FaqJSX = `import React from "react";
import Navbar from "./Navbar";

const Faq = () => {
  return (
    <div>
      <Navbar />
      <div className="container h-[90vh] flex flex-col w-[70vw] m-auto items-center justify-center">
        <h1 className="text-5xl text-center">FAQ</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore neque
          incidunt, doloremque excepturi repellendus, exercitationem ex possimus
          in fugit nam et aliquam facere.
        </p>
      </div>
    </div>
  );
};

export default Faq;`

fs.writeFile('src/components/Faq.jsx', FaqJSX, ()=>console.log("Faq.jsx has been craeted!"))

// -------------------------------- Updating App.jsx ----------------------------------

const AppJSX = `import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/Faq";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    // other pages....
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "/faq",
      element: <Faq/>
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;`

fs.writeFile('src/App.jsx', AppJSX, ()=>console.log("App.jsx has been updated!"))

// --------------------------------------------------- Updating index.html -----------------------------------

const IndexHTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React-Router</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`

fs.writeFile('index.html', IndexHTML, ()=>console.log("index.html has been updated!"))

// ------------------------------------------------- Updating index.css -------------------------------------

const IndexCSS =  `@tailwind base;
@tailwind components;
@tailwind utilities;`

fs.writeFile('src/index.css', IndexCSS, ()=>console.log("index.css has been updated!"))

// ------------------------------------------------- Updating App.css ---------------------------------------

const AppCSS = `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  margin : 0;
  padding : 0;
  box-sizing : border-box;
  font-family: "Poppins", sans-serif;
}`

fs.writeFile('src/App.css', AppCSS, ()=>console.log("App.css has been updated!"))
```

**For creating all files**
```bash
node index.js
```

**Now run your developer server**
```bash
npm run dev
```
Your app is live now at [localhost:5173](http://localhost:5173/)

**Happy Coding**!
