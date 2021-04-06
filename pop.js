const openBtn = document.getElementById('open');
const cancelBtn = document.querySelector('.cancelBtn');
const container = document.querySelector('.container');

openBtn.addEventListener('click', ()=>{
 container.style.display = 'flex';
 openBtn.style.display = 'none';   
});
cancelBtn.addEventListener('click', ()=>{
container.style.display = 'none';
openBtn.style.display = 'block';    
});