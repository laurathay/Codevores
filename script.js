document.querySelector('.jour').addEventListener('click', function(){
  document.querySelector('.toutjour').classList.toggle ('theme-nuit')
})

document.querySelector('.nuit').addEventListener('click', function(){
  document.querySelector('.toutnuit').classList.toggle('theme-jour')
})
