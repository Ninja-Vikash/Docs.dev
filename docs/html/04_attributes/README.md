## Docs.dev - Attributes

**Attributes** are used to provide additional information to any element and always written inside `<opening>` tag.

```html
<span data-title="docs.dev">Docs.dev</span>
```

> [!tip]\
> In the above `<span>` tag `data-title` is a custom attribute,\
> contains some additional information for the `<span>` tag.
>
> custom attribute can be created by using `data-` prefix.\
> eg. `data-title`, `data-description` or `data-message`.
>
> to style the `<span>` tag using custom data attribute
>
> ```html
> <!-- style -->
> <style>
>     [data-description] {
>         font-size: 32px;
>         font-weight: 500;
>         color: #010101;
>     }
> </style>
>
> <!-- html -->
> <span data-description>
>     Docs.dev, is an ultimate source for developers.
> </span>
> ```

---

### Common attributes

#### `class` attribute

`class`es are mainly used in styling of any element using CSS.<br />

> [!tip]\
> `class` attribute can contain multiple classes to apply multiple styling defined in CSS file or any StyleSheet.


```html
<style>
    .text-xl {
        font-size: 44px;
    }

    .font-bold {
        font-weight: 500;
    }
</style>

<span class="text-xl font-bold">Programming is easy, Just you are lazy!</span>
```

In the above code block.<br />
`.text-xl` and `.font-bold` are two classes containing some styles.<br />
Applying styles to one element by combining properties of both classes.

To change the appearance of multiple elements in a modular way.\
`class`es are the **rightfit**.

```html
<span class="font-bold">Code. Eat. Sleep.</span>
<span class="font-bold">You're a coder!!!</span>
```

#### `id` attribute

Alike `class` attribute, `id` attribute is also used to style any element.

> [!caution]\
> `id` attribute can _only have one value_,\
> using multiple values inside one `id` is a bad approach.
>
> `id`s are unique identifiers, keep them unique.\
> having two elements a common id is a bad practice.

```html
<style>
    #sub-title {
        font-size: 44px;
        font-weight: 500;
    }
</style>

<span id="sub-title">Programming is easy, Just you are lazy!</span>
```

#### `style` attribute
`style`, a very power attribute for html elements.<br />
It is used to apply inline styling on an element.

```html
<span style="color: #010101; font-weight: 500;">Want to code?</span>
```

> [!important]\
> You can learn more!\
> About the styling behaviour of any element by learning **CSS Specificity**.
>
> Specificity is a system that determines which CSS rule take precedence.\
> When multiple rules target the same element.
> 
> For now, inline styles has the highest predence value and can override internal and external styles.

### Tag specific attributes
#### `<a>` tag attributes

1. `href`: for navigating to a specific link through url or navigating to a portion of website linked with that portions `id`.

    For navigating a website.
    ```html
    <!-- absolute path -->
    <a href="https://www.google.com/">Google</a>
    ```

    For navigating through own pages.
    ```html
    <!-- relative path -->
    <a href="./about.html">About</a>
    ```

    For navigating to any portion of website.
    ```html
    <!-- id of the portion -->
    <a href="#about">Move to About</a>
    ```

    > [!warning]\
    > `href` is the least attribute of any anchor tag.\
    > without `href` anchor tag is powerless.

2. `target`: for controlling the behaviour of anchor tag navigation.

    ```html
    <!-- _blank, opens the url in a new tab -->
    <a href="https://www.google.com/" target="_blank">Google</a>

    <!-- _self, opens the url in the existing tab ( default ) -->
    <a href="https://www.google.com/" target="_self">Google</a>
    ```

3. `download`: Indicates that the linked resource should be downloaded rather than navigated to.

    ```html
    <a href="./example.txt" download>Download</a>
    ```

#### `<img>` tag attributes

> [!note]\
> `<img />`, is a self closing tag.\
> `src`, attribute is the least required attribute for an `<img />` tag.

1. `src`: Holds the path ( absolute / relative ) of any image.

    ```html
    <!-- Absolute path of any image -->
    <img src="./cat.jpg" />

    <!-- Relative path of any image -->
    <img src="https://i.pinimg.com/736x/77/c0/c3/77c0c34983744d94a363d68a312385b8.jpg" />
    ```

2. `alt`: If somehow renderable image gets broken due to change in path then the alternative text will appear instead there.

    ```html
    <img src="/cat.jpg" alt="cat image" />
    ```

3. `title`: While hovering over any image, tooltip or title will appear there.

    ```html
    <img src="./cat.jpg" alt="cat image" title="This is a cat image of yawning">
    ```

4. `height` and `width`: Specifies the width and height of the image in pixels. These attributes help control the layout of the page, and specifying them can prevent the page from reflowing as the image loads.

    ```html
    <img src="./cat.jpg" height="300" />
    ```

#### `<video>` tag attributes

> [!important]\
> `<video>` tag is not a self closing tag.
> ```html
> <video src="./cat.mp4"></video>
> ```

1. `src`: Required attribute for `<video>` tag, which holds the path of the video.

    ```html
    <video src="./cat.mp4"></video>
    ```

2. `controls`: To add basic functionality for video controlling like - play, pause and volume.

    ```html
    <video src="./cat.mp4" controls></video>
    ```

3. `height` and `width`: Sets the width and height of the video player in pixels.

    ```html
    <video src="./cat.mp4" width="640" height="360" controls></video>
    ```

4. `autoplay`: Used to play automatically as page loads.

    ```html
    <video src="./cat.mp4" autoplay></video>
    ```

5. `loop`: Replays the video when it reaches to the end.

    ```html
    <video src="./cat.mp4" loop></video>
    ```

6. `muted`: Mutes the video.

    ```html
    <video src="./cat.mp4" muted></video>
    ```

7. `poster`: To place thumbnail for the video.

    ```html
    <video src="./cat.mp4" poster="./cat.jpg" controls></video>
    ```

8. `playinline`: Enables the video to play inline on mobile devices instead of in a full-screen mode.

    ```html
    <video src="./cat.mp4" controls playsinline></video>
    ```