const modal = document.querySelector('.modal');
const preview = document.querySelectorAll('.row img');
const og = document.querySelector('.full-img');

preview.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        og.classList.add("open");

        const ogSRC = preview.getAttribute("data-original");

        og.src = ogSRC;
    })
})

modal.addEventListener('click', (e) =>{
    if(e.target.classList.contains('modal')){
        modal.classList.remove("open");
        og.classList.add("open");
    }
})