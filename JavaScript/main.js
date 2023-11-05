// active navbar 
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 10){
        nav.classList.add("scroll-on")
    }else{
        nav.classList.remove("scroll-on");
    }
};


// nav hide 
let navBar = document.querySelectorAll('nav-link');
let navCollapse = document.querySelector('counter-section.collapse');
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
});