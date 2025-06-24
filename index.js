let homeScore = document.getElementById('homeScore');
let awayScore = document.getElementById('awayScore');


let homeTotal = 0;
let awayTotal = 0;

document.getElementById('home1').onclick = () => updateScore('home', 1);
document.getElementById('home2').onclick = () => updateScore('home', 2);
document.getElementById('home3').onclick = () => updateScore('home', 3);

document.getElementById('away1').onclick = () => updateScore('away', 1);
document.getElementById('away2').onclick = () => updateScore('away', 2);
document.getElementById('away3').onclick = () => updateScore('away', 3);

function updateScore(team, points) {
  if (team === 'home') {
    homeTotal += points;
    homeScore.innerText = homeTotal;
  } else if (team === 'away') {
    awayTotal += points;
    awayScore.innerText = awayTotal;
  }
}
