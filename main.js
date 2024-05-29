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

  const menuelement=document.getElementById("menu")
  const crosselement=document.getElementById("cross")
  const content =document.getElementById("content")
  const id1=document.getElementById("t1")
  const id2=document.getElementById("t2")
  const id3=document.getElementById("t3")
  const id4=document.getElementById("t4")
  const id5=document.getElementById("t5")
  const id6=document.getElementById("i1")
  const id7=document.getElementById("i2")
  const id8=document.getElementById("i3")
  
menuelement.addEventListener("click",()=>{
    content.classList.toggle("hidden")
    crosselement.classList.toggle("hidden")
    menuelement.classList.toggle("hidden")
})
crosselement.addEventListener("click",()=>{
    content.classList.toggle("hidden")
    crosselement.classList.toggle("hidden")
    menuelement.classList.toggle("hidden")
})

id1.addEventListener("click",()=>{
    content.classList.toggle("hidden")
    crosselement.classList.toggle("hidden")
    menuelement.classList.toggle("hidden")
})
id2.addEventListener("click",()=>{
    content.classList.toggle("hidden")
    crosselement.classList.toggle("hidden")
    menuelement.classList.toggle("hidden")
})
id3.addEventListener("click",()=>{
    content.classList.toggle("hidden")
    crosselement.classList.toggle("hidden")
    menuelement.classList.toggle("hidden")
})
id4.addEventListener("click",()=>{
    content.classList.toggle("hidden")
    crosselement.classList.toggle("hidden")
    menuelement.classList.toggle("hidden")
})
id5.addEventListener("click",()=>{
    content.classList.toggle("hidden")
    crosselement.classList.toggle("hidden")
    menuelement.classList.toggle("hidden")
})
id6.addEventListener("click",()=>{
    content.classList.toggle("hidden")
    crosselement.classList.toggle("hidden")
    menuelement.classList.toggle("hidden")
})
id7.addEventListener("click",()=>{
    content.classList.toggle("hidden")
    crosselement.classList.toggle("hidden")
    menuelement.classList.toggle("hidden")
})
id8.addEventListener("click",()=>{
    content.classList.toggle("hidden")
    crosselement.classList.toggle("hidden")
    menuelement.classList.toggle("hidden")
})
