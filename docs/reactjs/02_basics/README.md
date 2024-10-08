## Docs.dev - React App with Vite

### How to start?

We can start with a blank directory. ( eg. myapp )<br/>
Open it in a code editor like VS code.

Execute the command below to setup a basic react app using `vite`
```bash
npm create vite@latest
```
> [!NOTE]\
> It will ask few question.\
> project name : `<project-name>`
> 
> If you want to use the current directory as main directory.
> 
> project name : `.`
>
> framework : `React`\
> variant : `Javascript`

#### Launch your app
```bash
# installing required packages ( node_module )
npm install

# start the server
npm run dev
```

> [!NOTE]\
> Open it in browser using `o` + `enter`

### File Structure

<details>
  <summary>index.html</summary>

    ```html
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + React</title>
    </head>
    <body>
        <div id="root"></div>
        <script type="module" src="/src/main.jsx"></script>
    </body>
    </html>
    ```
    
</details>

If you're just starting with frontend development, you've likely come across a file named index.html. You might wonder what it is if you don’t have prior knowledge. Think of HTML as the skeleton of any website. It provides the basic structure and layout, determining how different elements like headings, paragraphs, images, and links are organized on a webpage. Without HTML, web pages would have no form or structure to build upon.

