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
// // Get references to the Lottie container and the toggle button
const animationContainer = document.getElementById("lottie-animation");
const toggleButton = document.getElementById("toggle-button");

// Define the Lottie animation configuration
const animationConfig = {
  container: animationContainer,
  renderer: "svg", // You can choose "svg", "canvas", or "html"
  loop: false, // Set to true if you want the animation to loop
  autoplay: false, // Initially, do not autoplay the animation
  path: "/assets/star.json", // Replace with your animation file path
};

// Load the Lottie animation
const anim = lottie.loadAnimation(animationConfig);

// Flag to track the animation state (on or off)
let isAnimationPlaying = false;

// Function to toggle the animation
function toggleAnimation() {
  if (isAnimationPlaying) {
    // Pause the animation if it's playing
    anim.pause();
  } 
  else if( !isAnimationPlaying) {
    // Play the animation if it's paused
    anim.play();
  }

  // Update the animation state
  isAnimationPlaying = !isAnimationPlaying || false;
}

// Add a click event listener to the toggle button
animationContainer.addEventListener("click", toggleAnimation);




