const toggleBtn = document.querySelector(".toggleBtn");
const toggleBtnIcon = document.querySelector(".toggleBtn i");
const dropdownList = document.querySelector(".dropdownList");

toggleBtn.onclick = function () {
  dropdownList.classList.toggle("open");
  const isOpen = dropdownList.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

function toggleDetails(index) {
  const details = document.getElementById(`details${index}`);
  const activeDetails = document.querySelector(".process-details.active");

  if (activeDetails) {
    activeDetails.classList.remove("active");
  }

  details.classList.toggle("active");
}

// const sections = document.querySelectorAll(".section");
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       entry.target.classList.toggle("show", entry.isIntersecting);
//       if (entry.isIntersecting) observer.unobserve(entry.target);
//     });
//   },
//   { threshold: 0.5 }
// );

// sections.forEach((section) => {
//   observer.observe(section);
// });
