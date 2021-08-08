///////////Scroll Suave//////////////////////////////////////////////////
export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    event.preventDefault();
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    /////forma aternativa de scroll suave//////
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();
///////////Fim do Scroll Suave//////////////////////////////////////////////////
