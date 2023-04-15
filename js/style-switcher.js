const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});
/*------------hide--------------*/
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});
/*------------ theme colors-------------*/
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
/*------------ light and dark-------------*/
const dayNight = document.querySelector(".day-night-icon");

dayNight.addEventListener("click", () => {
  dayNight.classList.toggle("fa-sun-o");
  dayNight.classList.toggle("fa-moon-o");
  document.body.classList.toggle("dark");

darklight(); 

});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    console.log("body is dark")
    dayNight.classList.add("fa", "fa-sun-o");
  } else {
    
    // dayNight.querySelector("i").classList.add("fa fa-moon-o");
    // dayNight.classList.add("fa fa-moon-o");
    dayNight.classList.add("fa", "fa-moon-o");
    // dayNight.classList.add("");
  }
});


const darklight =()=>{

  const asideEl = document.querySelector(".aside");

if (document.body.classList.contains("dark")) {
  console.log("body is dark")
 
  asideEl.classList.add("dark-aside");

} else{
  console.log("body is light")
  asideEl.classList.remove("dark-aside");
}
}

darklight();  