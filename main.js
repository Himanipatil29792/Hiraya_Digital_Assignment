/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// index.js
window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("image");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";

    let subimage1 = document.getElementById("subimage1");
    subimage1.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";

    let subimage2 = document.getElementById("subimage2");
    subimage2.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";

    let subimage3 = document.getElementById("subimage3");
    subimage3.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}


function aosInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);