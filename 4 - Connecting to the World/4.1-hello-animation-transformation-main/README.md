# hello-animation-transformation

This is my assignment for **Module 3 Design - UI Accessibility**

- Go to the [guide](https://io.tskoli.dev/guides/5f1321b0b279dc27c467ca67)
- Go to my [Github live site](https://tristan-sch.github.io/hello-animation-transformation/)
- Go to my [Glitch live site](https://hello-animation-transformation-.glitch.me/)
- Go to my [Glitch code](https://glitch.com/edit/#!/hello-animation-transformation-)

## What did I do?

I tried to re-create a full-screen **loading animation** from the [Cygni template](http://preview.themeforest.net/item/cygni-interactive-portfolio-wordpress-theme/full_screen_preview/27917817?_ga=2.164354936.613568388.1635071376-1708789936.1610465670).

## Animated elements on their own

For this I created animated lines:

- **Line 1** (_on the left_) and **line 3** (_on the right_) are animated with **@keyframes "from ... to"** -> "_The animation is created by gradually changing from one set of CSS styles to another._"

```CSS
@keyframes animationName {
  from {
    height: 0%;
  }
  to {
    height: 100%;
  }
}
```

- **Line 2** (_in the middle_) is animated with JS in order to be a **progression bar**:

```javascript
function move() {
  var elem = document.getElementById("myBar");
  var width = 20;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width * 1 + "%";
    }
  }
}
```

## Animated elements upon interaction

- I only put border color whith :hover for the CTAs. 
- I had a problem with  _"animation-fill-mode: forwards;"_ -> it seemed that the animation transform mode overrode future changes and the :hover was not working
- To fix it I asked Smári for the solution: to add _"!important"_ behind all the properties of the :hover state in CSS like so:

```CSS
.cta-light:hover {
  border: 1px solid blue !important;
  transition: 1s ease-in-out !important;
  cursor: pointer !important;
}
```

## Responsivity

It's kind of responsive since I used grids. But i did not really work on it.

## Resources

- [CSS @keyframes Rule](https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp)
- [W3.CSS Progress Bars](https://www.w3schools.com/w3css/w3css_progressbar.asp)
- [Should :hover pseudo state style change work after CSS animation completes](https://stackoverflow.com/questions/26778434/should-hover-pseudo-state-style-change-work-after-css-animation-completes)
