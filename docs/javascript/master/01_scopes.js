let a = 10;

/**
 *  ```js
 *  console.log(c)  Reference Error
 *  ```
 */
function test() {
    let b = 20;
    if (true) {
        let c = 30;
        console.log(a, b, c)
    }
    console.log(c)
}

// test()
