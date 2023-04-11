import Highway from "@dogstudio/highway";

import Fade from "./transition";

const links = document.querySelectorAll("nav a");

const H = new Highway.Core({
  transitions: {
    default: Fade,
  },
});

H.on("NAVIGATE_IN", ({ to, trigger, location }) => {
 //when 'in' add red color on active a href 
  for (let i = 0; i < links.length; i++) {
    const link = links[i];

    // Clean class
    link.classList.remove("is-active");

    // Active link
    if (link.href === location.href) {
      link.classList.add("is-active");
    }
  }
});

//issue - window.location.href is affecting highway.js ajax..
// for (let i = 0; i < links.length; i++) {
//   const link = links[i];

//  link.addEventListener('click',function(event){
//   console.log('click')
//   event.preventDefault();
//   setTimeout(() => {
//     window.location.href = 'item.html';
//   }, 1000);
//  })
// }
