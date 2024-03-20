
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);

// Menu Toggle Function
function toggleMenu() {
    const menu = document.getElementById("sidemenu");
    menu.classList.toggle("show-menu");
}

function adjustForWindowSize() {
    const windowWidth = window.innerWidth;
    const menu = document.getElementById("sidemenu");
    if (windowWidth > 768 && menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu");
    }
    // You can add more adjustments here as needed
}

document.addEventListener("DOMContentLoaded", function() {
    adjustForWindowSize(); // Adjustments on page load
});

function toggleMenu() {
  var hamburger = document.querySelector('.hamburger');
  var menu = document.getElementById('sidemenu');
  
  hamburger.classList.toggle('active');
  menu.classList.toggle('show-menu');
}


window.addEventListener('resize', adjustForWindowSize);



window.addEventListener("resize", initSlider2);
window.addEventListener("load", initSlider2);


// Check screen size and adjust menu visibility
function adjustMenuForScreenSize() {
    const screenWidth = window.innerWidth;
    const menu = document.getElementById("sidemenu");
    if (screenWidth > 800) {
        // Ensure the menu is visible on larger screens
        menu.classList.remove("hide-menu");
        menu.classList.add("show-menu");
    } else {
        menu.classList.remove("show-menu");
        menu.classList.add("hide-menu");
    }
}

// Adjust menu on page load and window resize
document.addEventListener("DOMContentLoaded", adjustMenuForScreenSize);
window.addEventListener('resize', adjustMenuForScreenSize);


function scrollToTop() {
   window.scrollTo({
     top: 0,
       behavior: 'smooth'
    });
}


