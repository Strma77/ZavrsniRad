let indicator = document.querySelector(".indicator");

let docheight = document.documentElement.scrollHeight;

let viewportheight = document.documentElement.clientHeight

window.onscroll = function(){

    console.log(scrollY);

    let percentageScroll = (scrollY / (docheight-viewportheight)) * 100;

    indicator.style.width = percentageScroll + "%";
}