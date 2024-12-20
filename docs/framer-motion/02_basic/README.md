## Docs.dev - Basic motion props

Before learning about basic props, You should setup react app.

```jsx
import { motion } from "motion/react";

const MotionComponent = () => (
  <motion.div
    style={{ height: "100px", width: "100px", backgrondColor: "red" }}
    animate={{ x: 100 }}
  />
);
```

`animate` is a supercharged prop which supports all the CSS styles to animate the motion component.<br />
Also, `animate` is the least prop to apply animations on motion components.

But the animation ran before you switch your window, because there is no any duration set to the animation.

```jsx
const MotionComponent = () => (
  <motion.div
    style={{ height: "100px", width: "100px", backgrondColor: "red" }}
    animate={{ x: 100 }}
    transition={{ duration: 2 }}
  />
);
```

`transition` plays a vital role in any kind of animation.<br />
Defines how should an animation animate on screen.

At the same time you can provide some initial properties to your motion component using `initial` prop

```jsx
const MotionComponent = () => (
  <motion.div
    style={{ height: "100px", width: "100px", backgrondColor: "red" }}
    initial={{ x: 0 }}
    animate={{ x: 100 }}
    transition={{ duration: 2 }}
  />
);
```

> [!NOTE]\
> `initial` and `animate` prop accepts all CSS properties.

### CSS Advantages with framer

Framer-Motion provides shorthand property name facility like

```jsx
const MotionComponent = () => (
  <>
    <motion.div animate={{ translateX: 100 }} />
    <motion.div animate={{ x: 100 }} />
  </>
);
```

`translateX == x` |
`translateY == y`<br />

```jsx
const MotionComponent = () => (
  <>
    <motion.div animate={{ height: "100px" }} />
    <motion.div animate={{ height: 100 }} />
  </>
);
```

`100px == 100` | `100vh == "100vh"`
