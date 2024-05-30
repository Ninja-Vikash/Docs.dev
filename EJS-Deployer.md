## Express with EJS template Quick Setup
Are you facing problem to write or build the basic structure of an express app with EJS template.<br/>
You are in the right place.<br/>

**Save your valuable time** <br/>
By following the steps

# Quick Start 🚀
Create a directory where you want to keep all of your code.<br/>
You can create manually and open it in VS code or Using given Commands line by line

Open terminal in desktop or any where you want.<br/>
```cmd
mkdir "myapp"
cd './myapp'
code .
```
***
### Basic setup
Initialize project as npm project
```bash
npm init -y
```
Install basic dependencies
```bash
npm install express ejs
```
> [!WARNING]\
> Make sure you have installed **nodemon** in your machine globally.

### Magic Code ✨
> [!IMPORTANT]\
> Magic code is written in the Modern javascript code\
> Make sure before running the `main.js` file that you have updated the `package.json`
> ```json
> "type": "module",
> ```
```js
// main.js
import fs from 'fs'
import chalk from 'chalk'

// ----------------------------------------- Code for creating directory ---------------------------------------

fs.mkdir("views", () => {
   console.log(chalk.blue("\u2713 DONE "+ chalk.white(": views directory!")));
});
fs.mkdir("public", () => {
    console.log(chalk.blue("\u2713 DONE "+ chalk.white(": public directory!")));
});
fs.mkdir("public/css", () => {
    console.log(chalk.blue("\u2713 DONE "+ chalk.white(": public/css directory!")));
});

// --------------------------------------------- Code for creating index.js --------------------------------------

const IndexJS = `const express = require('express')
const path =  require('path')
const app = express()

app.use(express.static(path.join(__dirname, '/public')))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
});

app.listen(3000)`

fs.writeFile("index.js", IndexJS , ()=>{
    console.log(chalk.blue("\u2713 DONE "+ chalk.white(": index.js file!")));
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
    console.log(chalk.blue("\u2713 DONE "+ chalk.white(": index.ejs file!")));
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
    console.log(chalk.blue("\u2713 DONE "+ chalk.white(": navbar.ejs file!")));
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
    console.log(chalk.blue("\u2713 DONE "+ chalk.white(": index.css file!")));
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
    console.log(chalk.blue("\u2713 DONE "+ chalk.white(": navbar.css file!")));
})

setTimeout(() => {
  console.log(chalk.green("\u2713 Start working with your file!"))
}, 500);
```
> [!IMPORTANT]\
> Now run the command line for complete setup
> ```bash
> node main.js
> ```
> Revert the `package.json` file and change the `"type" : "commonjs"`

#### Start server
```bash
npx nodemon index.js
```

Your app is live at [localhost:3000](http://localhost:3000)

You can delete your `main.js` file after setup.

#### Happy Coding💖
