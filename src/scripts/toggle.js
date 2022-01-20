let nav = document.querySelector(".nav-bar");
let toggleNav = document.getElementById("toggle-nav-menu");

toggleNav.addEventListener("click", function(){
  nav.classList.toggle("active");
})