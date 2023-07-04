# Guess the Game
[Guess the Game](https://guessthe.game/) is a daily movie guessing game.

## How to use ? 
Copy the following code and paste it to your browser console while being on the framed wtf page.
The answer of the daily movie will be output to the console.
```js
const scripts = document.head.getElementsByTagName('script');
fetch(scripts.item(scripts.length - 1).src)
    .then(response => response.text()).then(content => console.log(content.match(/(?<=answers:\[")([a-zA-Z0-9 :'\.\-,&\!\\]*)(?=")/g)[Math.ceil(Math.abs(new Date - new Date("5/15/2022")) / 864e5) - 2]));
```

Example of usage : 
![image](https://i.imgur.com/U4nafBp.png)

It seems it cannot get correctly the scripts content anymore, then, just retrieve from the head the link to the main JS, and fetch the content directly. For example : 
```js
fetch('https://guessthe.game/static/js/main.9335dde1.js')
    .then(response => response.text()).then(content => console.log(content.match(/(?<=answers:\[")([a-zA-Z0-9 :'\.\-,&\!\\]*)(?=")/g)[Math.ceil(Math.abs(new Date - new Date("5/15/2022")) / 864e5) - 2]));
```
