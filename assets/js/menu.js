function toggleMenu(){
    let menuToggle = document.querySelector('.burger-menu');
    let navigation = document.querySelector('.header-nav');
    let menustop = document.querySelector("body");
    let hideimg = document.querySelector(".thanks-img-frst");
    let hideimg2 = document.querySelector(".thanks-img-second");
    let hideimg3 = document.querySelector(".thanks-third");
    let smihide = document.querySelector(".smi-info-ul-block");
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
    menustop.classList.toggle('stop')
    hideimg.classList.toggle('z-index-hide')
    hideimg2.classList.toggle('z-index-hide')
    hideimg3.classList.toggle('z-index-hide')
    smihide.classList.toggle('z-index-hide')
  }
  function mediatoggleMenu(){
    let menuToggle = document.querySelector('.burger-menu');
    let navigation = document.querySelector('.header-nav');
    let menustop = document.querySelector("body");
    let mediahide = document.querySelector(".media-info");
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
    menustop.classList.toggle('stop')
    mediahide.classList.toggle('z-index-hide')
}
function smitoggleMenu(){
  let menuToggle = document.querySelector('.burger-menu');
  let navigation = document.querySelector('.header-nav');
  let menustop = document.querySelector("body");
  let smihide = document.querySelector(".smi-info");
  menuToggle.classList.toggle('active')
  navigation.classList.toggle('active')
  menustop.classList.toggle('stop')
  smihide.classList.toggle('z-index-hide')
  
}
function documentstoggleMenu(){
  let menuToggle = document.querySelector('.burger-menu');
  let navigation = document.querySelector('.header-nav');
  let menustop = document.querySelector("body");
  let documentshide = document.querySelector(".documents-main");
  menuToggle.classList.toggle('active')
  navigation.classList.toggle('active')
  menustop.classList.toggle('stop')
  documentshide.classList.toggle('z-index-hide')
}
