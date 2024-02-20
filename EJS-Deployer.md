# ExpressJS + EJS Deployer
### What is ExpressJS?

<img src="https://github.com/Ninja-Vikash/asset-cloud/blob/main/icon%20%26%20png/expressjs.png" height="110px" align="left">

ExpressJS is a Web framework, Which is developed to create websites.

**This repo will help you to deploy EJS in ExpressJS**

Just follow the steps.

---

### EJS Deployment
Make a directory for your project. or

Skip these commands if you have already created a directory.

**To create directory**
```bash
mkdir "myapp"
```
**Open in VS Code** your current directory. Using the command line
```bash
code .
```
Or you can open it manually.

**Initialize your project as npm project**
```bash
npm init -y
```
**Install ExpressJS**
```bash
npm install express@4
```
**Install EJS**
```bash
npm install ejs
```
Make sure you have installed **nodemon** in machine globally.

**Update script in `package.json`**
```json
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "deploy": "node main.js"
},
```

**Create `main.js`**

`main.js`
```js
const fs = require("fs");
const path = require("path");

// ----------------------------------------- Code for creating directory ---------------------------------------

fs.mkdir(path.join(__dirname, "views"), () => {
   console.log("views created!");
});
fs.mkdir(path.join(__dirname, "public"), () => {
    console.log("public created!");
 });
 fs.mkdir(path.join(__dirname, "public/css"), () => {
    console.log("public/css created!");
 });

// --------------------------------------------- Code for creating index.js --------------------------------------

const IndexJS = `const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
});

app.listen(port, () => {
  console.log('Example app listening on port 3000')
});`

fs.writeFile("index.js", IndexJS , ()=>{
    console.log("index.js has been deployed!")
})

// ------------------------------------------- Code for creating index.ejs ---------------------------------------

const IndexEJS = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EJS Deployer!</title>
    <link rel="stylesheet" href="css/index.css" type="text/css">
</head>
<body>
<body>
    <%- include('navbar', {'navItem': 'Blog'}) %>
    <h1>EJS </h1>
    <h2>Thanks for Using EJS Deployer!</h2>
</body>
</body>
</html>`

fs.writeFile("views/index.ejs", IndexEJS , ()=>{
    console.log("index.ejs has been deployed!")
})

// -------------------------------------------- Code for navbar.ejs component ------------------------------------
const NavbarEJS =  `<head>
<link rel="stylesheet" href="css/navbar.css" type="text/css">
</head>

<nav>
<ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li><%= navItem %></li>
</ul>
</nav>`

fs.writeFile("views/navbar.ejs", NavbarEJS, ()=>{
    console.log("navbar.ejs has been deployed!")
})

// ------------------------------------------- Code for creating index.css ---------------------------------------
const IndexCSS = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

h1, h2 {
    text-align: center;
}`

fs.writeFile("public/css/index.css", IndexCSS, ()=>{
    console.log("index.css has been deployed!")
})

// -------------------------------------------- Code for creating navbar.css --------------------------------------
const NavbarCSS =  `nav {
    background-color: black;
}
nav ul {
    list-style: none;
    padding: 23px;
    display: flex;
    gap: 30px;
}

nav ul li {
    font-weight: 600;
    color: white;
}`

fs.writeFile("public/css/navbar.css", NavbarCSS, ()=>{
    console.log("navbar.css has been deployed!")
})
```

**Now run the given command to deploy all the essentials**
```bash
npm run deploy
```

**Start the server**
```bash
npm run dev
```

Click the link to open your server [localhost:3000](http://localhost:3000)

You can delete your `main.js` file after deployment.

**Happy Coding!**
