const panels = document.querySelectorAll('.panel');const panels = document.querySelectorAll('.panel');

console.log(panels);

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

function toggleOpen(){
  this.classList.toggle('open');
}

function toggleActive(e){
  if (e.propertyName.includes('flex'))
    this.classList.toggle('open-active');
}


console.log(panels);

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if (e.propertyName.includes('flex'))
        this.classList.toggle('open-active');
    }
