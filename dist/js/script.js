const sidebarToggler = document.getElementById("sidebarToggler");
const sidebar = document.querySelector(".aside");
const btnClose = document.getElementById("btnClose");

sidebarToggler.addEventListener("click", function () {
  sidebar.classList.toggle("expand");
});

btnClose.addEventListener("click", function () {
  sidebar.classList.remove("expand");
});
