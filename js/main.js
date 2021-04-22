const badge = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
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