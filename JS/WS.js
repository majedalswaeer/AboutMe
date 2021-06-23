'use strict';

let score = 0;

let username = prompt('Greeting from majed, please type your name below');
function funcone(){
  console.log(username);
  alert('Welcome ' + username + ' to my website');
  alert('Lets Play a guessing Game, Answer with just yes or no please !');
  let Q = prompt('Do you think that im looking for you right now ?', 'Type here');
  console.log(Q);

  if (Q === 'yes' || Q === 'y') {
    alert('Corecct Answer ' + username + '!');
    score++;
  } else {
    alert('things changing');
  }

}
funcone();



function functwo() {
  let QQ = prompt('do you think that my age is 23 ?', 'anwser yes or no');
  console.log(QQ);
  switch (QQ) {
  case 'y':
  case 'yes':
    alert('CORRECT ANSWER!');
    score++;
    break;
  case 'n':
  case 'no':
    alert('try again:(');
    break;
  }

}
functwo();

function functhree() {
  let QQQ = prompt('do you think that i love coffee ?', 'anwser yes or no');
  console.log(QQQ);
  switch (QQQ.toUpperCase()) {
  case 'Y':
  case 'YES':
    alert('CORRECT ANSWER!');
    score++;
    break;
  case 'N':
  case 'NO':
    alert('EVERYONE LOVES COFFEE :(');
    break;
  }
}
functhree();

function funcfour() {
  let QQQQ = prompt('do you think that i WILL BE A PRO SOFTWARE DEVELOPER ?', 'anwser yes or no');
  console.log(QQQQ);
  switch (QQQQ.toUpperCase()) {
  case 'Y':
  case 'YES':
    alert('CORRECT ANSWER!');
    score++;
    break;
  case 'N':
  case 'NO':
    alert('WE WILL SEE ;) ');
    break;
  }
}
funcfour();

function funcfive() {
  let QQQQQ = prompt('do you think that im moody?', 'anwser yes or no');
  console.log(QQQQQ);
  switch (QQQQQ.toLowerCase()) {
  case 'y':
  case 'yes':
    alert('CORRECT WRONG ANSWER!');
    break;
  case 'n':
  case 'no':
    alert('RIGHT ANSWER, ISN\'T IT ?');
    score++;
    break;
  }
  alert('Your are the most welcome ' + username);
}
funcfive();

function funcsix() {
  let u = Number(prompt('guess from 1-10 how much i like your answers?'));
  let j;
  for (j = 0; j < 4; j++) {

    if (u === 7) {
      alert('CORRECT, I LIKE NUM 7 :\')');
      score++;
      break;

    } else if (u < 7) {
      alert('low:(, Go higher!!');
      u = Number(prompt('guess from 1-10 how much i like your answers?'));

    } else if (u > 7) {
      alert('BE HUMBLE, Go LOWER!!');
      u = Number(prompt('guess from 1-10 how much i like your answers?'));
    } else if (j === 3) {
      alert('Failed:(!!, its seven');

    }
  }
}
funcsix();

function funcseven() {
  let i;
  let array = ['physics', 'math', 'psychology', 'language\'s literature', 'medicine'];
  for (i = 0; i < 6; i++) {
    let sc = prompt('guess which type of seince i like the most?', 'physics, math, psychology, language\'s literature or medicine ');
    let z = array.length;
    let fav = array[2];
    let favv = array[0];
    let m;

    for (m = 0; m <= z; m++) {
      if (sc === fav || sc === favv) {
        alert('AMAZING, Its all about physics and psychology');
        score++;
        m = 5;
      } else {
        alert('Wrong:(');

      }

      break;

    }

  }
}
funcseven();

alert('Congrats your score is' + score + 'out of 7');


