///////////Animação do Scroll///////////////////////////////////////////////////
export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else if (section.classList.contains("ativo")) {
          section.classList.remove("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();
/////////////Fim da Animação do Scroll///////////////////////////////////////////
