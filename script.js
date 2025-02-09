

// Menu icon toggle
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
  
  
};

// Scroll sections and nav link highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const header = document.querySelector("header");

// window.onscroll = () => {
//   const top = window.scrollY;

//   sections.forEach((sec) => {
//     const offset = sec.offsetTop - 100;
//     const height = sec.offsetHeight;
//     const id = sec.getAttribute("id");

    

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((link) => link.classList.remove("active"));
//       const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
//       if (activeLink) activeLink.classList.add("active");
//       sec.classList.add("show-animate");
//     } else {
//       sec.classList.remove("show-animate");
//     }
//   });



 

//   // Sticky header
//   header.classList.toggle("sticky", top > 100);

//   
// };


window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*='${id}']`)
          .classList.add("active");
      });
    }
  });

  //let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
