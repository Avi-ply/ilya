document.getElementById('btn-scroll').addEventListener('click', function () {
    document.getElementById('seccion-abajo').scrollIntoView({
      behavior: 'smooth'
    });
  });

const btnTop = document.getElementById("btn-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

btnTop.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"});
});

window.addEventListener('scroll', function () {
    const btnScroll = document.getElementById('scroll-second');
    if (window.scrollY > window.innerHeight * 0.6) {
      btnScroll.style.display = 'inline-block';
    } else {
      btnScroll.style.display = 'none';
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      // Desplazarse al objetivo
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });



  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('.nav-links');


  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });


  document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.bento-galeria');
    const items = Array.from(this.querySelectorAll('.bento-galeria-item'));

    for (let i = items.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]]
    }


    container.innerHTML = '';
    items.forEach(item => container.appendChild(item));
  }
  );  
  
  
  