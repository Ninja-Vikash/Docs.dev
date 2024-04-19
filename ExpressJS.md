# express.js
### What is express.js?

<img src="https://github.com/Ninja-Vikash/asset-cloud/blob/main/icon%20%26%20png/expressjs.png" height="120px" align="left">

express.js is a Web framework, Which is developed to create websites.

**Why we use it?** <br>
In node.js there is http package. <br>
But there is some limited capabilities in http package.
- In node.js, You can't serve static files.
- You have to impliment security from the beginning.

How many times, you will write how much code. After creating server. How will you manage everything.

**For Handling get request / post request you have to write custom code.**

**To simply everything**

express.js come into live & We need to use it.

---

### Creating a server in express.js
**Command for installing express.js**
```bash
npm install express@4
```

**Command for installing nodemon**
```bash
npm install nodemon
```
**Command for initializing project as a npm project**
```bash
npm init -y
```
**Make few changes in  `package.json` for running nodemon** 
```json
"scripts":{
    "start": "node index.js",
    "dev": "nodemon index.js"
}
```
Create a `index.js`
```js
const express = require('express');
const app = express();
const port = 3000

app.get('/',(req, res)=>{
    res.send('Hello World')
});

app.listen(port, () => {
  console.log(`Your app is live on port ${port}`)
});
```
**Command for start server**
```bash
npm run dev
```
**Instead you can use**
```bash
npx nodemon index.js
```
**Open your browser and search**

Click the link to open your server [localhost:3000](http://localhost:3000)

---
### Serving static files in express.js
1. Deploy express.js as above
2. Create a directory `public`
3. Inside `public` create what ever you want to serve.

For example : You have created `public/index.html`

`index.html`
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

**Add `app.use(express.static("public"))`**

`index.js`
```js
const express = require('express');
const path = require('path')
const app = express();
const port = 3000

app.use(express.static(path.join(__dirname, '/public')))

app.get('/',(req, res)=>{
    res.send('public/index.html')
});

app.listen(port, () => {
  console.log(`Your app is live on port ${port}`)
});
```
---
## Template Engine
**What is Template Engine?**

In express.js, a template engine is a tool that helps create dynamic web pages by combining static HTML templates with data. It allows developers to insert variables and logic into templates, which are then replaced with actual content when a user accesses a web page. This helps in separating code and design concerns, making it easier to manage and maintain web applications in Express.js. Examples of template engines include Pug, EJS, and Handlebars.

### Setup for EJS
**Install ExpressJS**
```bash
npm install express@4
```

**Command for installing EJS**
```bash
npm install ejs
```

**Command for initialize**
```bash
npm init -y
```
**Update package.json**
```json
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
  },
```

In `index.js`
```js
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, "/public")))

app.get('/', (req, res) => {
  res.render('index')
});

app.listen(port, () => {
  console.log(`Your app is live on port ${port}`)
});
```
**Create a file `views/index.ejs`**

`index.ejs`
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
### Creating components in EJS
Create a component `views/navbar.ejs`

In `navbar.ejs`
```html
<nav>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
</nav>
```
In `index.ejs`
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
### How to add CSS in EJS

Create a CSS file as `public/css/navbar.css`

In `navbar.css`, Write your CSS as you want.
```css
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

**Linking CSS file with EJS Templates**

In `index.js`
```js
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
```
In `navbar.ejs`
```html
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
---
### Passing value in EJS
```html
<body>
    <%- include('navbar', {'navItem': 'Blog'}) %>
</body>
```
In `navbar.ejs`
```html
<nav>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li><%= navItem %></li>
    </ul>
</nav>
```

**Happy Coding**
