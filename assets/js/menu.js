function toggleMenu(){
    let menuToggle = document.querySelector('.burger-menu');
    let navigation = document.querySelector('.header-nav');
    let menustop = document.querySelector("body");
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
    menustop.classList.toggle('stop')
  }