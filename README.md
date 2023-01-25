# Guess the Game
[Guess the Game](https://guessthe.game/) is a daily video game guessing puzzle.

## How to use ? 
Copy the code inside solver.js and paste it your browser console while being on the guess the game page.
The answer of the puzzle will be output to the console.
```js
const scripts = document.head.getElementsByTagName('script');
fetch(scripts.item(scripts.length - 1).src)
    .then(response => response.text()).then(content => console.log(content.match(/(?<=answer:")([a-zA-Z0-9 :'\.\-,&\!\\]*)(?=")/g)[Math.ceil(Math.abs(new Date - new Date("5/15/2022")) / 864e5) - 1]));
```

Example of usage : 
![image](https://i.imgur.com/U4nafBp.png)
