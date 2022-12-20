// Header and Navigation Menu //
// grab the ids that wraps all the links //
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

navToggle.addEventListener("click", () => { 
    navMenu.classList.add("show-menu"); //adds show menu class
});

navClose.addEventListener("click", () => { 
    navMenu.classList.remove("show-menu");
});

// function to change background when scrolling

function changeHeaderColor() {
	const header = document.getElementById("header");

	if (this.scrollY >= 200) header.classList.add("scroll-header");
	else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", changeHeaderColor);

// function that displays menu and links to the respective sections

const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
	const navMenu = document.getElementById("nav-menu");

	navMenu.classList.remove("show-menu");
}
navLink.forEach((link) => link.addEventListener("click", linkAction));

// Active section link 
const sections = document.querySelectorAll("section[id");

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((section) => {
		const sectionHeight = section.offsetHeight;
		const sectionTop = section.offsetTop - 50;
		sectionId = section.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(".nav_menu a[href*=" + sectionId + "]")
				.classList.add("active-link");
		} else {
			document
				.querySelector(".nav_menu a[href*=" + sectionId + "]")
				.classList.remove("active-link");
		}
	});
}
window.addEventListener("scroll", scrollActive);

// swiper js //
var swiper = new Swiper(".maarufufamous_container", {
	loop: true,
	spaceBetween:24,
	slidesPerView: "auto",
	grabCursor: true, 
	pagination: {
	  el: ".swiper-pagination",
	},
  });
