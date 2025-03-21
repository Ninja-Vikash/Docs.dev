## Docs.dev - React `import` alias configuration

You know importing components, methods are very easy in any text editor like vs-code. 🤓

Let suppose, You are importing a component or a method deeply in nested components.

```
└── 📁app
    └── 📁public
        └── vite.svg
    └── 📁src
        └── 📁assets
        └── 📁components
            └── 📁container
                └── Root.jsx
            └── 📁header
                └── Header.jsx
                └── index.jsx
                └── NavBar.jsx
            ├── 📁ui
                └── 📁buttons
                    └── ContainedButton.jsx
                    └── FilledButton.jsx
                    └── index.jsx
                └── 📁shapes
                    └── CircleShape.jsx
                    └── index.jsx
                    └── RectangleShape.jsx
                    └── TriangleShape.jsx
                └── 📁texts
                    └── index.jsx
                    └── TextHeading.jsx
                    └── TextSubHeading.jsx
                    └── TextOverline.jsx
        └── 📁contexts
            └── userContext.js
            └── themeContext.js
        └── 📁data
            └── serviceData.js
        └── 📁pages
            └── 📁about
                └── About.jsx
                └── index.jsx
            └── 📁contact
                └── Contact.jsx
                └── index.jsx
            └── 📁dashboard
                └── DashBoard.jsx
                └── index.jsx
            └── 📁error
                └── index.jsx
                └── Page201.jsx
                └── Page404.jsx
            └── 📁features
                └── Feature.jsx
                └── index.jsx
            └── 📁home
                └── Home.jsx
                └── index.jsx
            └── 📁profile
                └── index.jsx
                └── Profile.jsx
            └── index.jsx
        └── 📁services
            └── apiServices.js
        └── 📁styles
            └── Header.css
        └── 📁utils
            └── sendMail.js
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

Here is the example of an react app folder structure.

**Now lets use any component from components directory**

```jsx
// pages/about/About.jsx
import React from "react";
import { TextHeading } from "../../../components/ui/texts";

function About() {
  return (
    <>
      <TextHeading heading={"This is heading"} />
    </>
  );
}

export default About;
```

Lets create an api request as well

```jsx
// pages/about/About.jsx
import React, { useContext, useEffect, useState } from "react";
import userContext from "../../../contexts/userContext";
import { TextHeading, TextSubHeading } from "../../../components/ui/texts";

function About() {
  const [user, userId] = useContext(userContext);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = async () => {
      const userResponse = await getUser(userId);
      setUsername(userResponse.name);
    };
    user();
  }, [user]);

  return (
    <>
      <TextHeading heading={"This is heading"} />
      <TextSubHeading sentence={username} />
    </>
  );
}

export default About;
```

**But wait** 🤓

`../../../` is looking weird.

No worries here is the solution.

### import `alias`

```js
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@services": path.resolve(__dirname, "src/services"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
});
```

The above configuration will help react app to resolve the path.

But work is not finished yet.<br/>
Your code editor will not suggest the path of imports. 😵

**Don't worry** 😁<br/>
Here is the solution for it.

Create a `jsconfig.json` file at the root of the your app.

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@components/*": ["components/*"],
      "@contexts/*": ["contexts/*"],
      "@services/*": ["services/*"],
      "@pages/*": ["pages/*"],
      "@utils/*": ["utils/*"]
    }
  }
}
```

**Finally, Your import statements will look like**

```jsx
// pages/about/About.jsx
import React, { useContext, useEffect, useState } from "react";
import userContext from "@contexts/userContext";
import { TextHeading, TextSubHeading } from "@components/ui/texts";

function About() {
  const [user, userId] = useContext(userContext);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = async () => {
      const userResponse = await getUser(userId);
      setUsername(userResponse.name);
    };
    user();
  }, [user]);

  return (
    <>
      <TextHeading heading={"This is heading"} />
      <TextSubHeading sentence={username} />
    </>
  );
}

export default About;
```

**Crafted with 💖!**
