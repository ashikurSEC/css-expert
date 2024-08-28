/** 
*  - Collapsible
*/

const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach((item) => item.addEventListener('click', function () {
    this.classList.toggle('collapsible--expanded');
}));




/*
const collapsibles = document.querySelectorAll('.collapsible');
for(let i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener('click', () => {
        collapsibles[i].classList.toggle('collapsible--expanded');
    })
}

*/