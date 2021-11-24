//////////////////////////////////////////////////////////////////
// Ano

const yearEl = document.querySelector(".ano");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//////////////////////////////////////////////////////////////////
// Sticky navigation

const secaoHeroEl = document.querySelector(".secao-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(secaoHeroEl);

// const sectionHeroEl = document.querySelector(".secao-hero");

// // new IntersectionObserver(function () {}, {});
// const observer = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);
//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     // In the viewport
//     root: null, // null = viewport
//     threshold: 0, // 0 = sair da viewport. 1 = completamente dentro da viewport
//     rootMargin: "-80px", //altura do menu de navegação
//   }
// );
// observer.observe(sectionHeroEl);
