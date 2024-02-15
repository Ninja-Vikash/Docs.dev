# NodeJS
### What is NodeJS?

**NodeJS** is an open-source, cross-platform JavaScript runtime built on the V8 engine. It enables developers to execute JavaScript code outside of a web browser, making it ideal for server-side scripting and building scalable network applications. Known for its asynchronous and event-driven architecture, Node.js allows for non-blocking code execution and is widely used for developing web servers, APIs, and real-time applications. Its single programming language, fast execution speed, vast package ecosystem (**NPM**), and active community support contribute to its popularity in the development community.

### Installing NodeJS in Machine
1. Open browser and search `download nodejs`, Open official webpage.
2. Choose your machine type- Windows | macOS | Source Code
3. Ensure that you download the version corresponding to your system's bit architecture to ensure compatibility and optimal performance.

When we install nodeJS, npm will be automatically installed.

### To Check NodeJS installed or not?
Command for checking installed nodeJS version in your PC
```bash
node --version
```
Command for checking installed npm version in your PC
```bash
npm --version
```
---
### Creating a Client Side Server
- Create a directory
- Make a `server.js` file
- In `server.js`

    ```js
    console.log("Hello World!")
    ```
- Run the command on VS Code terminal window
    ```bash
    node .\server.js
    ```
---
### How to initialize your project as a npm project?
Command for initializing project as a npm project
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

**Commmand for avoiding all questions**
```bash
npm init -y
```

---

### Installing nodemon
**Why nodemon?**

When we use node to start the server, We have to restart the server after every single change.

To solve this we use nodemon, because nodemon restart the server automatically after every single change.


**Installing nodemon globally**
```bash
npm install --global nodemon
```

Open `package.json`

**Make this changes in your `package.json`**
```json
"scripts":{
    "start": "node index.js",
    "dev": "nodemon index.js"
}
```
Preview your app using `nodemon`
```cmd
npm run dev
```
> Before initializing install nodemon