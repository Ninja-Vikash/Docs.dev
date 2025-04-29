## Docs.dev - Material UI component extending

Material UI provides a bunch of `pre-built` components to use directly.<br/>

But we can make our own component that can be customized via Material UI's `sx` prop.

### Extending Component

#### Basic HTML tag extended to MUI component

```jsx
// StyledText.jsx

import { styled } from "@mui/material";

const StyledText = styled("p")({
    fontSize: "24px",
    fontWeight: 500,
    color: "rgb(6, 6, 37)",
    letterSpacing: "4px",
    lineHeight: "12px",
});

export default StyledText;
```

#### Extended MUI component with custom `props` support

> [!IMPORTANT]\
> Use `TypeScript` for best compatiblity

```tsx
// Paragraph.tsx

import { styled, Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";

interface ParagraphProps extends TypographyProps {
    dusky?: boolean;
}

const Paragraph = styled(Typography, {
    shouldForwardProp: (prop) => prop !== "dusky",
})<ParagraphProps>(({ theme, dusky }) => ({
    color: dusky
        ? theme.palette.mode === "light"
            ? theme.palette.grey[700]
            : theme.palette.grey[500]
        : theme.palette.mode === "light"
        ? theme.palette.grey[900]
        : theme.palette.grey[100],
}));

Paragraph.defaultProps = {
    variant: "body1",
    dusky: false,
};

export default Paragraph;
```

### Extending variants of MUI component

#### Custom variant for MUI `<Button />` component.

```jsx
// theme.jsx

import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: "b/w" },
                    style: {
                        backgroundColor: "#FCFDFD",
                        color: "#141A21",
                        "&:hover": {
                            backgroundColor: "#C4CDD5",
                        },
                    },
                },
            ],
        },
    },
});
```

If you're using `TypeScript` create a declaration file for new variant.

```ts
// types/mui-button.d.ts

import "@mui/material/Button";

declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        "b/w": true;
    }
}
```

#### To customize with `SxProps` for custom Components

```tsx
// CustomListItem.tsx

import { ListItem } from "@mui/material";
import type { SxProps } from "@mui/material";

interface CustomListItemProps {
    primaryText: string;
    sx: SxProps;
}

function CustomListItem ({ primaryText, sx }: ) {
    return (
        <ListItem sx={sx}>
            <Box sx={{ bgcolor: "primary.main" }}>{primaryText}</Box>
        </ListItem>
    )
}

export default CustomListItem;
```

**Created with 💖!**
