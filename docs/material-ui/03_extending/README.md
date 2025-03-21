## Docs.dev - Material UI component extending

Material UI provides a bunch of `pre-built` components to use directly.<br/>

But we can make our own component that can be customized via Material UI's `sx` prop.

### Styled Component
```jsx
import { styled } from "@mui/material";

const StyledText = styled("p")({
    fontSize: "24px",
    fontWeight: 500,
    color: "rgb(6, 6, 37)",
    letterSpacing: "4px",
    lineHeight: "12px"
})

export default StyledText;
```

You can define some custom props.

```jsx
import { styled } from "@mui/material";

const StyledText = styled("p")(({ isDisable }) =>({
    fontSize: "24px",
    fontWeight: 500,
    color: isDisable ? "rgb(28, 28, 27)" : "rgb(6, 6, 37)",
    letterSpacing: "4px",
    lineHeight: "12px"
}))

export default StyledText;
```

> [IMPORTANT]\
> JavaScript does not give suggestions for custom props.
>
> For prop suggestion use TypeScript.

```tsx
import { styled } from "@mui/material";

interface StyledTextProps {
    isDisable?: boolean
}

const StyledText = styled("p")<StyledTextProps>(({ isDisable }) =>({
    fontSize: "24px",
    fontWeight: 500,
    color: isDisable ? "rgb(28, 28, 27)" : "rgb(6, 6, 37)",
    letterSpacing: "4px",
    lineHeight: "12px"
}))

export default StyledText;
```

**Created with 💖!**