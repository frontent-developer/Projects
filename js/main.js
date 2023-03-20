const button = document.querySelector('[open-modal-window]');
const modal = document.querySelector('.fade-block');
const clouseBtn = document.querySelector('[clouse-modal-window]');

button.addEventListener('click',function(){
  modal.classList.remove('hidden');
});

clouseBtn.addEventListener('click',function(){
  modal.classList.add('hidden');
});