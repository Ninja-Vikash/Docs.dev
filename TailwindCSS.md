# Tailwind CSS
### What is Tailwind CSS?

Tailwind CSS is an open source **CSS framework**.

The main feature of this library is that, unlike other CSS frameworks like **Bootstarp**, It does not provide a series of predefined classes for elements such as buttons or tables. Instead, It creates a list of **utility** CSS classes that can be used to style each element by mixing and
matching.

---
### Get Started

Tailwind CSS works by scanning all of your HTML files, Javascript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

It's fast, flexible, and reliable - with zero runtime.

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
Or can open manually.

**Now in VS code terminal window**

To install
```bash
npm install -D tailwindcss
```
To create `tailwind.config.js`
```bash
npx tailwindcss init
```
In `tailwind.config.js`
```js
content : ["./src/**/*.{html,js}"]
```
If you are going to write only HTML, <br> You can go with
```js
content : ["./src/**/*.html"]
```
Create a folder inside your main directory `./src`. Using the given command or manually.
```cmd
mkdir "src"
```
Create a css file inside css directory as `./src/css/input.css`

In `input.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Now run this command
```bash
npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css --watch
```
for creating `output.css`

Create `index.html` inside src directory. And paste this boiler plate.
```html
<!DOCTYPE html>
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
```
**Happy Coding**