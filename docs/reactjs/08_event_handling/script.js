console.log("Hello, ReactJS!");

// ELEMENTS

const btn = document.querySelector("#btn");
const text = document.querySelector("#text");
const reset = document.querySelector("#reset");

btn.addEventListener("click", () => {
  console.log("Button is clicked!");

  text.innerHTML = "Button is clicked!";
});

reset.addEventListener("click", () => {
    console.log("Reset is clicked!");
    
    text.innerHTML = "";
})
