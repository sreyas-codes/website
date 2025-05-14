// Show the "Top" button when user scrolls down
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const myBtn = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      myBtn.style.display = "block";
  } else {
      myBtn.style.display = "none";
  }
}

// Scroll smoothly to top when button is clicked
function topFunction() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
}

// Optional: Set default display to "none" when page loads
document.addEventListener("DOMContentLoaded", function () {
  const myBtn = document.getElementById("myBtn");
  if (myBtn) {
      myBtn.style.display = "none";
  }
});

