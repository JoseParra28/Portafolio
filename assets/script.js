let spanTexts = document.getElementsByTagName("span");
window.onload = function(){
    for(spanText of spanTexts){
        spanText.classList.add("active");
    }
}
ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
 });
 ScrollReveal().reveal('.content', { delay: 500 });

