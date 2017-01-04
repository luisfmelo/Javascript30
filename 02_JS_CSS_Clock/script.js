const hand = document.querySelector('.hand');
const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

setInterval(setDate, 1000);

function setDate(){
  const now = new Date();

  // seconds
  const sec = now.getSeconds();
  const secDeg = (sec * 360 / 60) + 90; // adiciono 90 porque é o offset
  if (sec == 0)
    hand.style.transition = `transition: all 0`;
  secHand.style.transform = `rotate(${secDeg}deg)`;
  if (sec != 0)
    hand.style.transition = 'transition: all 0.05s';

  // Minutes
  const min = now.getMinutes();
  const minDeg = (min * 360 / 60) + 90;
  minHand.style.transform = `rotate(${minDeg}deg)`;

  const hour = now.getHours();
  const hourDeg = (hour * 360 / 12) + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}
