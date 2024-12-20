## Docs.dev - Installation of motion

Installing motion in your react project is quite difficult.

*Just Kidding*! 😁

It's very easy just use the npm command and all set
```bash
npm install motion
```

Since, framer is merged with motion.
```jsx
import { motion } from "motion/react";
```
We can import motion directly from `motion/react`

### Usage
The core of motion for React is the `<motion />` component. It's a normal DOM element, supercharged with animation capabilities.

```jsx
const MotionComponent = () => <motion.div />
```

animating a motion component is as straightforward as setting values via the animate prop

```jsx
const MotionComponent = () => <motion.div animate={{ x: 100 }} />
```