## Docs.dev - React App with Vite

### How to start?

You can start with a blank directory. ( eg. **myapp** )<br/>
Open it in your code editor like VS code.

To setup a react app using `vite`
```bash
npm create vite@latest
```
> [!NOTE]\
> Answer the following.
>
> project name : `<project-name>`
> 
> If you want to use the current directory as main directory.
> 
> project name : `.`
>
> framework : `React`\
> variant : `Javascript`
>
> **Fast setup of a react app in your existing directory**
> ```bash
> npm create vite@latest .
> ```

#### Launch your app 🚀
```bash
# installing required packages ( node_module )
npm install

# start the server
npm run dev
```

> [!NOTE]\
> **Shortcuts**
>
> press `r` + `enter` to restart the server\
> press `u` + `enter` to show server url\
> press `o` + `enter` to open in browser\
> press `c` + `enter` to clear console\
> press `q` + `enter` to quit

### File Structure

```
└── 📁app
    └── 📁public
        └── vite.svg
    └── 📁src
        └── 📁assets
            └── react.svg
        └── App.css
        └── App.jsx
        └── index.css
        └── main.jsx
    └── .gitignore
    └── eslint.config.js
    └── index.html
    └── package-lock.json
    └── package.json
    └── README.md
    └── vite.config.js
```

- **📁app**: The root folder of your project.
- **📁public**: Contains publicly accessible files.
    - `vite.svg`: An SVG image used by Vite, typically for a logo or favicon.
- **📁src**: Contains the source code for your React app.
    - **📁assets**: Houses image assets, such as react.svg.
    - `App.css`: The main CSS file used for styling the App component.
    - `App.jsx`: The main React component that represents your app's structure.
    - `index.css`: Global CSS styling for your application.
    - `main.jsx`: The entry point of your React application, where the app is rendered into the DOM.
- `.gitignore`: Specifies which files and folders Git should ignore ( e.g., `node_modules` ).
- `eslint.config.js`: Contains ESLint configuration settings for code quality and linting.
- `index.html`: The main HTML file that serves the React app. The `<div id="root"></div>` within it is where React renders the app.
- `package-lock.json`: Automatically generated to describe the exact dependency tree, ensuring consistency across installations.
- `package.json`: Defines the project's dependencies, scripts, and metadata like the project name, version, and more.
- `README.md`: Documentation file that typically includes project setup instructions.
- `vite.config.js`: Configuration file for Vite, a fast build tool and development server used in this React project.