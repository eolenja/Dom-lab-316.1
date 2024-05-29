// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];


const mainEL = document.querySelector('main');    
mainEL.style.background = 'var(--main-bg)';
console.log (mainEL)
mainEL.innerHTML = "<h1>DOM manipulation</h1>"  ;
mainEL.classList.add("flex-ctr")

const topMenuEL= document.querySelector('#top-menu');
topMenuEL.style.height = "100%"
topMenuEL.style.background = 'var(--top-menu-bg)';
topMenuEL.classList.add("flex-around");

menuLinks.forEach 




