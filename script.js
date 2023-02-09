const btn = document.querySelector('#access-btn');
const modal = document.querySelector('.modal')

btn.addEventListener('click', ()=>{
    modal.style.display = 'flex';
})

modal.addEventListener('click', ()=>{
    modal.style.display = 'none';
})