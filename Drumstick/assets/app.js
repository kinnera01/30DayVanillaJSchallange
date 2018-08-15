function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
      console.log(e)
      let audio;
      let key;
      if(!isNaN(e)){
         audio = document.querySelector(`audio[data-key="${e}"]`); 
         key = document.querySelector(`button[data-key="${e}"]`);
      }else{
         audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
       key = document.querySelector(`button[data-key="${e.keyCode}"]`);
      }

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
