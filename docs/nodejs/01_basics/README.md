## Docs.dev - node.js - Basics

### Initialization
We can start our server side scripting once we initialize npm setup using the following command
```bash
npm init
```
**Following Questions will be asked**<br/>
package name : `<project-name>`<br/>
version : `1.0.0`<br/>
description : `<description>`<br/>
entry point : `index.js`<br/>
test command : <br/>
git repository : <br/>
keywords :<br/>
author : `docs.dev`<br/>
licence :

Type `Yes` to finish the initialization.

> [!NOTE]\
> **Alternative**
> ```bash
> npm init -y
> ```

After the completion of above, It will create a `package.json`, which will contain all the details of the project.

### Execution
Create a file as `index.js`
```js
console.log("Docs.dev")
```
> Execute with `node index.js`

The global object ( context ) of node.js
```js
console.log(this)       // {}
```
> [!NOTE]\
> When we check the global object in the browser, it returns window object\
> Since we are trying to access global object in node.js environment that is why we are getting an empty object.