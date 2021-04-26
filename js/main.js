const badge = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
  // console.log(window.scrollY);
  if(window.scrollY > 500) {
    // badge.style.display = 'none';
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badge, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    // badge .style.display = 'block';
    gsap.to(badge, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));
//_.throttle(함수, 시간)


const fade = document.querySelectorAll('.visual .fade-in');
fade.forEach(function (fade, index) {
  //gsap.to(요소, 지속시간, 옵션)
  gsap.to(fade, 1, {
    //몇 초 뒤에 실행될건지
    delay: (index + 1) * .7,  //0.7, 1.4, 2.1, 2.8
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});
