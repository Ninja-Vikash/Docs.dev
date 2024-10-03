## Docs.dev - node.js

<img src="https://github.com/Ninja-Vikash/web_assets/blob/main/icons_svg/NODEJS.svg" height="95px" align="left">

**Node.js** is an open-source, cross-platform JavaScript **runtime** built on the `V8 engine`. It enables developers to execute JavaScript code outside of a web browser, making it ideal for server-side scripting and building scalable network applications. Known for its `asynchronous` and event-driven architecture, Node.js allows for non-blocking code execution and is widely used for developing **web servers**, **API**s, and real-time applications. Its single programming language, fast execution speed, vast package ecosystem (**NPM**), and active community support contribute to its popularity in the development community.

### Install `node.js` in your locale machine 
Download `nodejs`, from official website.<br/>
According to your machine type- Windows | macOS | Source Code<br/>
Ensure the corresponding version of your system's bit architecture for compatibility and optimal performance.

Once we setup `node.js`, now we can access or execute `npm` commands.

Let's confirm the `node.js` is working or not
```bash
# node.js version
node --version

# npm version
npm --version`
``` 

Initially, we create and execute our JavaScript file with HTML file.<br/>
But now it is possible to execute JavaScript file standalone like other programming languages.

It opened multiple oppourtunity.

### Let's create your first server side JavaScript file
Create a blank JavaScript file ( eg. `server.js` )
```js
console.log("Node.js with Docs.dev!")
```
We can execute the file using node command as `node server.js`

### Creating a server using node.js
```js
const http = require("node:http");
```
Above line is calling the `http` module from `node.js`, To create an HTTP server.

```js
const http = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;
```
`hostname` is set to `"127.0.0.1"` the loopback address for the local machine, commonly known as `localhost`.<br/>
`port` is set to `3000`, meaning the server will listen on port 3000.

```js
const http = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/text");
    res.end("Hello coder!\n");
})
```
> [!NOTE]\
> `http` module has a `createServer()` method for creating a new HTTP server instance.\
> `createServer([requestLister])` accepts a parameter as a callback function.
>
> The callback function takes two arguments as\
> `req`: The request object representing the incoming request.\
> `res`: The response object used to send the response back to the client.

```js
const http = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/text");
    res.end("Hello coder!\n");
})
```
> This comes under the best practices when we store the server instance in a variable.

Wait, You are thinking about what is the purpose of declaring `hostname` and `port`.<br/>
Let's go for the real fun.
```js
const http = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/text");
    res.end("Hello coder!\n");
})

server.listen(port, hostname, () => {
    console.log(`App is running at http://${hostname}:${port} !!!`);
});
```
> [!IMPORTANT]\
> `server.listen()` starts the server.

**Creating multiple routes**<br/>

```js
const server = http.createServer((req, res) => {

  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hello node.js!</h1>\n");
  }
  else
  if (req.url == "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>About us page</h1>\n");
  }
  else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Page not found</h1>\n");
  }
  
});
```

### Nodemon
Nodemon is like a helper for `Node.js` developers. When you're building a program, you make changes to the code and then need to run it again to see how it works. Nodemon watches your code and whenever you make a change, it automatically restarts your program for you, saving your time and effort!

**Why Nodemon?**<br/>
A Node.js server does not restart by itself because it is designed to run continuously until it is stopped manually or crashes. Without a tool like nodemon, any changes to the server's code require manually stopping and restarting the server to apply those changes, as the server doesn't have built-in functionality to detect code changes and restart automatically.

**Installation of nodemon in your machine using CLI**
```bash
npm install --global nodemon
```
> [!NOTE]\
> `--global` is a flag for installing the package as globally
>
> Some PC has disabled script that is why npm `nodemon server.js` will not work.\
> For resolving this problem add a new script in `package.json` file as
> ```json
> "scripts":{
>   "start": "node index.js",
>   "dev": "nodemon index.js"
> }
> ```
> 
> Start the dev server using CLI
> ```bash
> npm run dev
> ```

#### Or you can use this command line.
```bash
npx nodemon server.js
```

#### Happy Coding💖