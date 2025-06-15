let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');

     if (top >= offset && top < offset + height) {
  navLinks.forEach(links => {
    links.classList.remove('active');
    document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
  });
}

    });
}


function loader(){
  document.querySelector('.loader-container').classList.add('fade-out')

}

function fadeOut(){
  setInterval(loader, 3000);
}
window.onload = fadeOut;

const swiper = new Swiper('.swiper', {
  loop: true,
  grabCuesor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    620: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

$('.review-container').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 4500,
    margin:10,
    nav:true,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})