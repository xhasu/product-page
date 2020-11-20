(() => {

  // feather icons
  feather.replace();

  // mobile navbar
  document.querySelector('.navbar').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('nav.nav').classList.toggle('open');
  })

  // swiper hero
  const swiperHero = new Swiper('.hero .swiper-container', {
    loop: true,
    pagination: {
      el: '.hero .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    }
  });

})();