// scroll animation
const sr=ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true,
})

sr.reveal('.hero-text,.favor,.foot')
sr.reveal('.b-circle,.s-circle,.big-chips',{delay:600,scale:.5})
sr.reveal('.c1,.c2,.c3',{delay:1000,interval:200})
sr.reveal('.leaf',{delay:1000,interval:1200})
sr.reveal('.t1,.t2',{delay:1400,interval:200})
sr.reveal('.careimg,.ctxt', {origin:'left'})
sr.reveal('.caretext,.cimg', {origin:'right'})
sr.reveal('.bn,.pc',{interval: 100})

const swiperfav = new Swiper('.favorite-swiper', {
    loop:true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
  
  });