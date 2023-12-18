// Function to have smooth scroll animation on link click
document.querySelectorAll('a[href^="#about"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    if (targetElement) {
      // Calculate the scroll position while considering the navigation bar's height
      const offset = targetElement.getBoundingClientRect().top - navbarHeight;

      window.scrollTo({
        top: offset + window.scrollY,
        behavior: "smooth",
      });
    }
  });
});

// Function to have smooth scroll animation on link click
document.querySelectorAll('a[href^="#contact"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    if (targetElement) {
      // Calculate the scroll position while considering the navigation bar's height
      const offset = targetElement.getBoundingClientRect().top - navbarHeight;

      window.scrollTo({
        top: offset + window.scrollY,
        behavior: "smooth",
      });
    }
  });
});

// Function to have smooth scroll animation on link click
document.querySelectorAll('a[href^="#home"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    if (targetElement) {
      // Calculate the scroll position while considering the navigation bar's height
      const offset = targetElement.getBoundingClientRect().top - navbarHeight;

      window.scrollTo({
        top: offset + window.scrollY,
        behavior: "smooth",
      });
    }
  });
});

// Function to have smooth scroll animation on link click
document.querySelectorAll('a[href^="#services"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    if (targetElement) {
      // Calculate the scroll position while considering the navigation bar's height
      const offset = targetElement.getBoundingClientRect().top - navbarHeight;

      window.scrollTo({
        top: offset + window.scrollY,
        behavior: "smooth",
      });
    }
  });
});
// Function to have smooth scroll animation on link click
document.querySelectorAll('a[href^="#projects"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    if (targetElement) {
      // Calculate the scroll position while considering the navigation bar's height
      const offset = targetElement.getBoundingClientRect().top - navbarHeight;

      window.scrollTo({
        top: offset + window.scrollY,
        behavior: "smooth",
      });
    }
  });
});
// Type writing animation for hero section
const textElement = document.getElementById("hero_txt_2");
const textToType = "I'm Farhan"; // The text you want to animate
let index = 0;

function typeText() {
  if (index < textToType.length) {
    textElement.innerHTML += textToType.charAt(index);
    index++;
    setTimeout(typeText, 100); // Adjust the typing speed (milliseconds)
  }
}

// Start the typing animation when the page loads
window.addEventListener("load", () => {
  typeText();
});

window.addEventListener("resize", () => {
  const navbarHeight = document.querySelector(".navbar").offsetHeight;
  document.querySelector(".content").style.marginTop = navbarHeight + "px";
});

// Trigger the event on page load as well
window.dispatchEvent(new Event("resize"));

function bookCall() {
  window.location.href = "..//html/book_call_form.html";
}

function githubPortfolio() {
  window.location.href =
    "https://github.com/farhankeriwala/farhankeriwala.github.io";
}
function reactWebAppGithub() {
  window.location.href = "https://github.com/farhankeriwala/weather-app";
}
const call_options_input = document.querySelector("#call_options");

call_options_input.addEventListener("change", handleInput, false);

function handleInput(e) {
  const { value, placeholder } = e.target;
  e.target.placeholder = `Search ${value} here`;
  e.target.value = "";
}

function thankyou() {
  window.location.href = "..//html/thank_you.html";
}
