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


  const form = document.querySelector("form");
  const popup = document.getElementById("thankYouPopup");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Send the form using FormSubmit
    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        popup.style.display = "flex"; // Show popup
        form.reset(); // Optional: clear form
      } else {
        alert("There was an error. Please try again.");
      }
    })
    .catch(error => {
      alert("Network error. Please try again.");
    });
  });

  function closePopup() {
    popup.style.display = "none";
  }

