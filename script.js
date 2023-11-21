document.addEventListener("DOMContentLoaded", function () {
   document.getElementById("burger").addEventListener("click", function () {
     document.querySelector("header").classList.toggle("open");
   });
 });
 
 document.getElementById("nav").addEventListener("click", function () {
   document.querySelector("header").classList.remove("open");
 });
 
 // closisng burger's menu by pressing ESC buton
 window.addEventListener("keydown", function (e) {
   if (e.key === "Escape") {
     document.querySelector("header").classList.remove("open");
   }
 });