const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastcheck;

checkBoxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

function handleCheck (e){
  // check if shift key is pressed
  // AND check if is checking (not uncheck)
  let inBetween = false;
  if (e.shiftKey && this.checked){
    // loop over every checkbox
    checkBoxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastCheck)
        inBetween = !inBetween;
      if ( inBetween)
        checkbox.checked = true;
    });
  }
  if (this.checked)
    lastCheck = this;
}
