"use strict";

const pageHeader = document.querySelector("header");
const pageQuickNav = document.querySelector(".quickNav");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio === 0) {
      pageQuickNav.classList.remove("hide");
    } else {
      pageQuickNav.classList.add("hide");
    }
  });
});

observer.observe(pageHeader);
