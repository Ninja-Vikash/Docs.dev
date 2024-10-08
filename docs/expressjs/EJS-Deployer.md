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

/**
 *  Build Directories
 */
fs.mkdir("views", () => {
   console.log(chalk.blue("\u2713 DONE "+ chalk.white(": views directory!")));
});
fs.mkdir("public", () => {
    console.log(chalk.blue("\u2713 DONE "+ chalk.white(": public directory!")));
});
fs.mkdir("public/css", () => {
    console.log(chalk.blue("\u2713 DONE "+ chalk.white(": public/css directory!")));
});
fs.mkdir("public/js", () => {
    console.log(chalk.blue("\u2713 DONE "+ chalk.white(": public/js directory!")));
});
fs.mkdir("public/Icons", () => {
    console.log(chalk.blue("\u2713 DONE "+ chalk.white(": public/icons directory!")));
});

/**
 *  Index.js
 */
const IndexJS = `const express = require('express')
const fs = require("fs")
const path = require('path')
const app = express()

let Icons
fs.readdir("./public/Icons", function(err, files){
  Icons = files
})

app.use(express.static(path.join(__dirname, '/public')))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', {Icons})
});

app.listen(3000)`

fs.writeFile("index.js", IndexJS , ()=>{
    console.log(chalk.blue("\u2713 DONE "+ chalk.white(": index.js file!")));
})

/**
 *  Index.ejs
 */
const IndexEJS = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EJS x TailwindCSS</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="css/index.css" type="text/css">
</head>
<body>
    <%- include('titlebar', {'title': 'EJS x TailwindCSS'}) %>
    
    <main class="bg-zinc-800 h-[100vh] flex items-center justify-center flex-col">
        <h1 class="text-7xl text-zinc-200 text-center mb-5">Quick Start!</h1>
        <h2 class="text-zinc-500 text-xl">Your Project With Initial Setup</h2>

        <div id="cardContainer" class="card-container mt-8 flex gap-3">
            <% Icons.map(e => { %>
                <div class="card h-24 w-24 bg-zinc-700 rounded-md flex items-center justify-center">
                    <img src="/Icons/<%= e %>" width="70">
                </div>
            <% }) %>
        </div>
    </main>

    <script src="js/script.js"></script>
</body>
</html>`

fs.writeFile("views/index.ejs", IndexEJS , ()=>{
    console.log(chalk.blue("\u2713 DONE "+ chalk.white(": index.ejs file!")));
})

/**
 *  Titlebar.ejs
 */
const TitlebarEJS = `<nav class="text-white py-5 px-6 w-[100%] absolute flex justify-end">
    <h2 class="text-sm"><%= title %></h2>
</nav>`

fs.writeFile("views/titlebar.ejs", TitlebarEJS , ()=>{
    console.log(chalk.blue("\u2713 DONE "+ chalk.white(": titlebar.ejs file!")));
})

/**
 *  Index.css
 */
const IndexCSS = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}`

fs.writeFile("public/css/index.css", IndexCSS, ()=>{
    console.log(chalk.blue("\u2713 DONE "+ chalk.white(": index.css file!")));
})

/**
 *  Script.js
 */
const ScriptJS = `console.log("Start work seamlessly using EJS template and tailwindCSS!")`

fs.writeFile("public/js/script.js", ScriptJS, ()=>{
    console.log(chalk.blue("\u2713 DONE "+ chalk.white(": script.js file!")))
})

/**
 *  Icons
 */
const ejsIcon = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<polygon fill="#c0ca33" points="19.981,15.84 19.981,10.575 -0.014,21.019 -0.014,26.92 20.066,37.363 20.066,32.099 5.208,23.948"></polygon><polygon fill="#c0ca33" points="23.547,36.281 29.575,36.281 47.066,11.807 41.08,11.807"></polygon><path fill="#c0ca33" d="M28.429,12.274c-2.79,0-5.052,2.262-5.052,5.052s2.262,5.052,5.052,5.052s5.052-2.262,5.052-5.052	C33.481,14.535,31.219,12.274,28.429,12.274z M28.472,18.981c-0.821,0-1.486-0.77-1.486-1.719s0.665-1.719,1.486-1.719	s1.486,0.77,1.486,1.719S29.292,18.981,28.472,18.981z"></path><path fill="#c0ca33" d="M41.429,27.274c-2.79,0-5.052,2.262-5.052,5.052s2.262,5.052,5.052,5.052s5.052-2.262,5.052-5.052	C46.481,29.535,44.219,27.274,41.429,27.274z M41.472,33.981c-0.821,0-1.486-0.77-1.486-1.719s0.665-1.719,1.486-1.719	s1.486,0.77,1.486,1.719C42.958,33.211,42.292,33.981,41.472,33.981z"></path>
</svg>`

const expressIcon = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path>
</svg>`

const nodejsIcon = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#21a366" d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"></path><path fill="#21a366" d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"></path>
</svg>`

const tailwindcssIcon = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
</svg>`

fs.writeFile("public/Icons/ejs.svg", ejsIcon, ()=>{
    console.log(chalk.blue("\u2713 DONE "+ chalk.white(": ejs.svg file")))
})
fs.writeFile("public/Icons/expressjs.svg", expressIcon, ()=>{
    console.log(chalk.blue("\u2713 DONE "+ chalk.white(": expressjs.svg file")))
})
fs.writeFile("public/Icons/nodejs.svg", nodejsIcon, ()=>{
    console.log(chalk.blue("\u2713 DONE "+ chalk.white(": nodejs.svg file")))
})
fs.writeFile("public/Icons/tailwindcss.svg", tailwindcssIcon, ()=>{
    console.log(chalk.blue("\u2713 DONE "+ chalk.white(": tailwindcss.svg file")))
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
