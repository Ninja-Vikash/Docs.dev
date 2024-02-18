# Tailwind CSS
### What is Tailwind CSS?

Tailwind CSS is an open-source **CSS framework**.

<img src="https://github.com/Ninja-Vikash/asset-cloud/blob/main/icon%20%26%20png/tailwind.png" height="80px" width="80px" align="left">

The main feature of this library is that, unlike other CSS frameworks like **Bootstrap**, It does not provide a series of predefined classes for elements such as buttons or tables. Instead, It creates a list of **utility** CSS classes that can be used to style each element by mixing and
matching.

---

### Get Started!

Tailwind CSS works by scanning all of your HTML files, Javascript components, and any other templates for class names, generating the corresponding styles, and then writing them to a static CSS file.

It's fast, flexible, and reliable - with zero runtime.

---

### Installation
Create a directory for your project.
```cmd
mkdir "myapp"
```
Now open directory and Open in VS Code
```cmd
cd './myapp'
```
```bash
code .
```
Or it can open manually.

**Now in VS code terminal window**

To install tailwind
```bash
npm install -D tailwindcss
```
To create `tailwind.config.js`
```bash
npx tailwindcss init
```

### Quick Deployment Mode
**Create  `./main.js`** & **Initialize your project as nodejs project using the command**
```bash
npm init -y
```
Paste this given code in your `main.js`
```js
const fs = require("fs");
const path = require("path");

// --------------------- CODE FOR DIRECTORY CREATING --------------------------

fs.mkdir(path.join(__dirname, "src"), () => {
    console.log("src directory created");
});
fs.mkdir(path.join(__dirname, "src/css"), () => {
    console.log("css directiry created");
});

// -------------------- CODE FOR HTML WRITING -----------------------

const HTMLFile = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./css/output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-7xl font-bold text-center">Hello</h1>
  <h2 class="text-xl text-center">Ninja Vikash</h2>
</body>
</html>
`;
fs.writeFile("./src/index.html", HTMLFile, () => {
console.log("html file created");
});

// -------------------- CODE FOR CSS WRITING --------------------------

const inputCSS =`@tailwind base;
@tailwind components;
@tailwind utilities;
`

fs.writeFile("./src/css/input.css", inputCSS, () => {
    console.log("css file created");
});

// --------------------- CODE FOR CONFIG UPDATE -------------------------

const configContent =`/** @type {import('tailwindcss').Config} */
module.exports = {
  content : ["./src/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}
`

fs.writeFile("tailwind.config.js", configContent, ()=>{
    console.log("config updated!")
})
```
Run this commmand for completing Deployment
```bash
node main.js
```

Finally run this command for creating an static css file
```bash
npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css --watch
```
for creating `output.css`

**Happy Coding**
