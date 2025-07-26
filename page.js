document.addEventListener("DOMContentLoaded", () => {

  // Elementos DOM
  const links = document.querySelectorAll('aside a[href^="#"]');
  const btnEmpezar = document.getElementById('btn-empezar');

  // Scroll
  links.forEach(link => {

    link.addEventListener("click", (e) => {

      e.preventDefault();

      const targetId = link.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });
      
  });

  // Animación + scroll
  btnEmpezar.addEventListener('click', () => {

    // Scroll suave
    document.getElementById('intro').scrollIntoView({ behavior: 'smooth' });
    
  });

});