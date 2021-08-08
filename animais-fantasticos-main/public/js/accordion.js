///////////Accordion List/////////////////////////////////////////////////
export default function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const ativo = "ativo";

  function activeAccordion() {
    console.log(this, this.nextElementSibling, "toggle");
    this.classList.toggle(ativo);
    this.nextElementSibling.classList.toggle(ativo);
  }

  accordionList.forEach((item) => {
    item.addEventListener("click", activeAccordion);
  });
}

///////////Fim do Accordion List/////////////////////////////////////////
