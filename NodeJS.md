# Node.js
### What is Node.js?
<img src="https://github.com/Ninja-Vikash/asset-cloud/blob/main/icon%20%26%20png/nodejs.png" height="95px" align="left">

**Node.js** is an open-source, cross-platform JavaScript runtime built on the V8 engine. It enables developers to execute JavaScript code outside of a web browser, making it ideal for server-side scripting and building scalable network applications. Known for its asynchronous and event-driven architecture, Node.js allows for non-blocking code execution and is widely used for developing web servers, APIs, and real-time applications. Its single programming language, fast execution speed, vast package ecosystem (**NPM**), and active community support contribute to its popularity in the development community.

### Installing Node.js in Machine
1. Open browser and search `download nodejs`, Open official webpage.
2. Choose your machine type- Windows | macOS | Source Code
3. Ensure that you download the version corresponding to your system's bit architecture to ensure compatibility and optimal performance.

When we install `node.js`, `npm` will be automatically installed.

***

### Node.js installed or not in your machine?
Run the command line in your computer's `Window Terminal` | `PowerShell`
```bash
node --version
```
For npm
```bash
npm --version
```
---
### Server side rendering
Create a `server.js` | `main.js` as you want
```js
// server.js
console.log("Hello World!")
```
Execute this command line on the terminal
```bash
node .\server.js
```
---
### Initializing project as a npm project
Execute the CLI
```bash
npm init
```
**Following Questions will be asked**
- package name : `<project-name>`
- version : `1.0.0`
- description : `<description>`
- entry point : `index.js`
- test command : 
- git repository : 
- keywords :
- author : `ninja-vikash`
- licence :

Type `Yes` for completing.

**Quick initializing using CLI**
```bash
npm init -y
```

---

### Manual restarting of the server
When we use server side rendering and we run `node .\server.js` command line for starting the server.<br/>
For each change on `server.js` file we have to rerun or restart the server again and again.<br/>
To solve this problem `nodemon` came into existence

### Nodemon
Nodemon is like a helper for Node.js developers. When you're building a program, you make changes to the code and then need to run it again to see how it works. Nodemon watches your code and whenever you make a change, it automatically restarts your program for you, saving you time and effort! 

#### Installation of nodemon in your machine using CLI
```bash
npm install --global nodemon
```
> [!WARNING]\
> Some PC has disabled script that is why npm `nodemon server.js` will not work.\
> Instead of you can add a script in `package.json` file
> ```json
> "scripts":{
>   "start": "node index.js",
>   "dev": "nodemon index.js"
> }
> ```
> Start the dev server using CLI
> ```cmd
> npm run dev
> ```

### Use this CLI for more concisely
```bash
npx nodemon server.js
```
#### Happy Coding💖