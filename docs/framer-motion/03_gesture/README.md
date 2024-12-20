## Docs.dev - Gesture Control

_Motion provides direct gesture control as prop_ 😋

#### `whileHover`

```jsx
const MotionButton = () => (
  <motion.button
    style={{ padding: "10px 5px", backgroundColor: "red" }}
    whileHover={{ scale: 1.02 }}
  >
    Motion Button
  </motion.button>
);
```

#### `whileTap`

```jsx
const MotionButton = () => (
  <motion.button
    style={{ padding: "10px 5px", backgroundColor: "red" }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    Motion Button
  </motion.button>
);
```

#### `whileFocus`

```jsx
const MotionComponent = () => (
  <motion.input
    style={{
      padding: "10px 20px",
      border: "2px solid rgb(0, 100, 255)",
      outline: "none",
      borderRadius: 5,
    }}
    whileFocus={{ borderColor: "rgb(0, 255, 0)" }}
    type="text"
  />
);
```
