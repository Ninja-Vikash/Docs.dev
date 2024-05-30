# Express.js
### What is express.js?

<img src="https://github.com/Ninja-Vikash/asset-cloud/blob/main/icon%20%26%20png/expressjs.png" height="120px" align="left">

Express.js is a framework built on top of Node.js. It's like having building blocks (Node.js) and using them to create a pre-made structure (Express.js) to simplify building a house (your web application).

#### Why express.js is popular for web development with node.js
- **Easier and Faster development** : Express.js provides features like routing and  middleware, which streamline how you write code for your web application. Think of it as having pre-built tools that save you time and effort.
- **Organization** : Express.js helps structure your code in a clear way, making it easier to maintain and understand, especially for larger projects.
- **More Features** : The Express.js framework offers additional functionalities out of the box, such as handling different HTTP requests and responses, making it easier to build web applications.

---

### Set up a basic express app
To keep all the dependencies, We will have to create a npm project which will build a `package.json` file

CLI for `npm` initializing
```bash
npm init -y
```
It will create a `package.json` with initial details of your project.<br/>

CLI for intalling `express`
```bash
npm install express
```

CLI for `nodemon` | If you don't have globally 
```bash
npm install nodemon
```
#### Set up a basic server using express
> [!IMPORTANT]\
> Change the name of main file in `package.json`\
> `main.js` to `app.js`
```js
// app.js
const express = require("express");
const app = express();

app.get('/',(req, res)=>{
    res.send('Hello World!')
});

app.listen(3000)
```
CLI for starting server using nodemon
```bash
npx nodemon app.js
```
Your app is running at [localhost:3000](http://localhost:3000)

***
### Serving static files
For serving static files we need a `public` directory which will hold all the static files<br/>
For example a file with extension `.html`, `.css`, `.txt` is known as a static file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>
```
For accessing any static file we have to define a method in express app

```js
// app.js
const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname, '/public')))

app.get('/',(req, res)=>{
    res.send('index')
});

app.listen(3000);
```
---
### Template Engine

In express.js, a template engine is a tool that helps create dynamic web pages by combining static HTML templates with data. It allows developers to insert variables and logic into templates, which are then replaced with actual content when a user accesses a web page. This helps in separating code and design concerns, making it easier to manage and maintain web applications in Express.js. Examples of template engines include Pug, EJS, and Handlebars.

### Set up a EJS template
CLI for installing `ejs`
```bash
npm install ejs
```

```js
// app.js
const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, "/public")))

app.get('/', (req, res) => {
  res.render('index')
});

app.listen(3000)
```
> [!NOTE]\
> Make sure you have a `views` directory with a `index.ejs` file

Code of the `index.ejs`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>EJS!</h1>
</body>
</html>
```
---
### Create a component
Create a component inside views directory as `views/navbar.ejs`
```html
<!-- Navbar component -->
<nav>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
</nav>
```
#### Including navbar component in `index.ejs` file
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <%- include('navbar') %>
</body>
</html>
```
---
### Adding Style Sheets 
Place your external StyleSheet inside public directory.

```css
/* Style Sheet */
nav ul {
    list-style: none;
    padding: 23px;
    display: flex;
    gap: 30px;
}

nav ul li {
    font-weight: 600;
}
```
Now link CSS file with nav component
```html
<!-- StyleSheet place inside a head tag -->
<head>
    <link rel="stylesheet" href="css/navbar.css">
</head>

<nav>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
</nav>
```
> [!IMPORTANT]\
> StyleSheets are static files therefore must have to tell to use it.
```js
// app.js
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname,"/public")))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
});

app.listen(3000)
```
***

### Dynamic rendering using EJS
We can pass any value from parent using curly braces `{}` and in the form of an object
```html
<!-- index.ejs -->
<body>
    <%- include('navbar', {'navItem': 'Blog'}) %>
</body>
```
And receiving value using EJS syntax
```html
<!-- Navbar component -->
<nav>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li><%= navItem %></li>
    </ul>
</nav>
```

#### Happy Coding💖
