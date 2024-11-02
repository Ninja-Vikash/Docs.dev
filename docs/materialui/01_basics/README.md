## Docs.dev - Material UI basics

> [!WARNING]\
> Before deep diving into the realm of **MUI**.\
> You should have the good knowledge of `React` and `HTML` syntax. 🤓

### Typography

Typography, Text plays a very important role in any website. No matter big or small.

```jsx
<Typography>This is a text</Typography>
```
> [!NOTE]\
> You can write text in `MUI` using `<Typography>`

But wait, `MUI` provides some facilities like, you can tell the `<Typography>` component.<br/>
What it should be.

```jsx
<Typography variant="h1">This is a text</Typography>
```

**Other variants you can try** 😋<br/>
Headings : `h2`, `h3`, `h4`, `h5`, `h6`,<br/>
Paragraphs : `body1`, `body2`,<br/>
Special : `overline`, `caption`, `span`<br/>
Button : `button`,<br/>
Sub-heading : `subtitle1`, `subtitle2`

### Box

Box are the components similar as `<div>` but supports `MUI` functionality.<br/>
Like `theme()` and `MUI` styling, makes it a very powerful component.

```jsx
<Box>
    <Typography variant="h2">
        Docs.dev - Material UI
    </Typography>
</Box>
```

### Use of `sx`

`MUI` provides built-in components but a website should have their uniqueness.<br/>
Means customization.

Customizing `MUI` components maybe difficult using `style` attribute.<br/>
So you can use `sx` attribute instead of `style`.

```jsx
<Typography
    variant="h2"
    sx={{
        fontSize: "20px",
        fontWeight: 600,
        color: "#222",
    }}
>
    Docs.dev - Material UI
</Typography>
```

`sx` provides benefits over `style`, it supports all the `CSS` styling as well as it facilate us to write the property name in a shorthand way.

```jsx
<Typography
    variant="h2"
    sx={{
        mt: 2,
        py: 1,
        fontSize: "20px",
        fontWeight: 600,
        color: "#222",
    }}
>
    Docs.dev - Material UI
</Typography>
```
#### Property name shorthands<br/>
`m` → `margin`<br/>
`mt` → `marginTop`<br/>
`mb` → `marginBottom`<br/>
`mr` → `marginRight`<br/>
`ml` → `marginLeft`<br/>
`my` → `marginBlock` ( applies on *y-axis* )<br/>
`mx` → `marginInline` ( applies on *x-axis* )<br/>

`p` → `padding`<br/>
`pt` → `paddingTop`<br/>
`pb` → `paddingBottom`<br/>
`pr` → `paddingRight`<br/>
`pl` → `paddingLeft`<br/>
`py` → `paddingBlock` ( applies on *y-axis* )<br/>
`px` → `paddingInline` ( applies on *x-axis* )<br/>

`bgcolor` → `backgroundColor`

### Use of `component`

When you are dealing with `MUI`, you want to use semantic tags.<br/>( eg. `<main>`, `<section>`, `<aside>`, `<header>`, `<footer>`, `<nav>` )

**The question is how will you achieve it in** `MUI` 🤔?<br/>
`Material UI` does not provide semantic tags.

No worries, `component` attribute comes into live to solve the problem.<br/>
Using `component` we can manipulate the `MUI` components as expected.

```jsx
<Box
    component={"main"}
    sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}
>
    <Typography variant="h3">Docs.dev - MUI</Typography>
</Box>
```

### Use of `<img />`

`MUI` does not provide `<img />` tag as well.

```jsx
<Box
    component={"img"}
    src="./img.png"
    sx={{
        height: "300px",
        width: "350px",
        objectFit: "cover"
    }}
/>
```
