const navLinks= document.querySelector('.navLinks');
const hamburgerBtn = document.querySelector('.hamburgerBtn');
const toggleImg = document.querySelector('#toogleImg');

hamburgerBtn.addEventListener('click',()=>{
    navLinks.classList.toggle('open');
  const   isOpen=navLinks.classList.contains('open');
    if(isOpen){
        toggleImg.src='../images/icon-close.svg'
    }else{
        toggleImg.src='../images/icon-hamburger.svg'
    }
})