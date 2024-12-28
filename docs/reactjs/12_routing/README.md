## Docs.dev - React Router

_Suppose you visit any website._ 🤔<br />
There must have some _navigation links_ to navigate other pages of the website.

**Navigation** plays a very crucial role in any web application.

Route, You can assume as nested url of that website.<br/>
eg., `https://www.docs.dev` is the main url of website and it has many roots as —<br/> `https://www.docs.dev/react` , `https://www.docs.dev/javascript` , `https://www.docs.dev/materialui` are the nested routes of the main branch.

### Let's start 🚀

You need to install an package for `react-router-dom`

```bash
npm i react-router-dom
```

Once the installation has been done, you can start writing routes.

```jsx
// App.jsx

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Home } from "./pages";
import { NotFound } from "./pages/error";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
```

> [!IMPORTANT]\
> Declaring `router` on the top level file is a good practice.
>
> In react applications it is `App.jsx` the entry point.

---

#### `<Outlet />`

```jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { Home, About, Dashboard, Profile, Settings } from "./pages";
import { NotFound } from "./pages/error";

function DashboardLayout() {
  return (
    <div>
      <nav>Navbar</nav>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
```

> [!IMPORTANT]\
> `<DashboardLayout />` component is used to preserve top level component like aside menu.\
> It will only update the `outlet` for different routes.

**Created with 💖!**
