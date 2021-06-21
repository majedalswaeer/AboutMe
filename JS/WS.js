'use strict';

let username = prompt('Greeting from majed, please type your name below');
console.log(username);
alert('Welcome ' + username + ' to my website');
alert('Lets Play a guessing Game');
let Q = prompt('guess my original major : Mechanical engineering, industrial engineering or managment', 'Mechanical engineering');
console.log(Q);
if (Q = 'Mechanical engineering') {
  alert('Corecct Answer ' + username + '!');
} else {
  alert('Try again please');
}

let QQ = prompt('do you think that my age is 23 ?', 'anwser yes or no');
console.log(QQ);
switch (QQ) {
case 'y':
case 'yes':
  alert('CORRECT ANSWER!');
  break;
case 'n':
case 'no':
  alert('try again:(');
  break;
}

let QQQ = prompt('do you think that i love coffee ?', 'anwser yes or no');
console.log(QQQ);
switch (QQQ.toUpperCase()) {
case 'Y':
case 'YES':
  alert('CORRECT ANSWER!');
  break;
case 'N':
case 'NO':
  alert('EVERYONE LOVES COFFEE :(');
  break;
}

let QQQQ = prompt('do you think that i WILL BE A PRO SOFTWARE DEVELOPER ?', 'anwser yes or no');
console.log(QQQQ);
switch (QQQQ.toUpperCase()) {
case 'Y':
case 'YES':
  alert('CORRECT ANSWER!');
  break;
case 'N':
case 'NO':
  alert('WE WILL SEE ;) ');
  break;
}

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
  break;
}
alert('Your are the most welcome ' + username);


