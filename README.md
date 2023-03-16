# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
    - [For the `Javascript`](#for-the-javascript)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![screenshot of project](./images/Screenshot-Frontend%20Mentor%20-%20Interactive%20rating%20component%20-%20.png)

### Links

- Solution URL: github](https://github.com/Emmanuel-Xs/interactive-rating-component-main/)
- Live Site URL: [netlify](https://harmonious-cheesecake-b97b99.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Google Fonts
- Mobile-first workflow
- vanilla Javascript
- GSAP

### What I learned

I used the template element to store the `thank you state` so that I can dynamically add it into the `rating card` after the user have selected a rating and submitted. I did it to get familiar with it and to try something different.

I also had to take a **`MENTAL NOTE`** that anything that is `clickable` should preferably be a `button` or a `link` and should have a `width`

Because of `padding` and the difference between the content of the `rating state` and the `thank you state`, their heights are different, so I got the height of the `rating card` from its `offsetHeight` property to use to make the height of `thank you state` for consistency but there is a slight discrepancy as the padding of the `thank you state` makes it to be a little inconsistent.

#### For the `Javascript`

I added a `clickEventListener` to the `ratingContainer` which is the parent of each `rating button` with the aim of taking advantage of the `event bubbling` to get each `rating button` when clicked  using

```js
if (!e.target.matches(".rating")) return
```

Then I got the `rating number` from the `rating button clicked`.

Inside the `clickEventListener` for the `ratingContainer` I created a `buttonClickEventListener` to get the `rating number`, add it to  `span.displayedRating` element in the `template`, clone it and display in the `rating card` after removing its content.

```js
const clone = template.cloneNode(true)
  const displayedRating = clone.querySelector(".selected-rating")
  displayedRating.textContent = selectedRatingValue

  ratingCard.appendChild(clone)
  ratingCard.classList.add("center")
  ratingCard.style.minHeight = ratingCardHeight + "px"
```

I structured the `javascript` in a way that you must select a `rating` before you can submit your `rating`.
I used `GSAP` for animation after trying to animate with `CSS`, `GSAP` is easier to use for animation than plain `CSS`. I am glad I came Across it.

### Continued development

I would love to do more challenges to consolidate my learning as I read some `Javascript` books to brush up on my basics.

## Author

- Github - [Emmanuel-Xs](https://github.com/Emmanuel-Xs)
- Frontend Mentor - [Emmanuel-Xs](https://www.frontendmentor.io/profile/Emmanuel-Xs)
- Twitter - [@Emma Nwaohiri](https://www.twitter.com/EmmaNwaohiri)
