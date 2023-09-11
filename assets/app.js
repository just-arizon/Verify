const hamburger = document.querySelector(".hamburger");
const menuItems = document.querySelectorAll(".nav-item")
const smallMenuContainer = document.querySelector(".small_screen-menu-container")
const smallMenu = document.querySelector(".small-menu")
// console.log(hamburger, menu);
hamburger.addEventListener("click", () => {
 smallMenuContainer.classList.toggle("active")
})
menuItems.forEach(item => {
    item.addEventListener("click", () =>{
        smallMenuContainer.classList.remove("active")
    })
});
