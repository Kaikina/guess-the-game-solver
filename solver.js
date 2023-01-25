const scripts = document.head.getElementsByTagName('script');
fetch(scripts.item(scripts.length - 1).src)
    .then(response => response.text()).then(content => console.log(content.match(/(?<=answer:")([a-zA-Z0-9 :'\.\-,&\!\\]*)(?=")/g)[Math.ceil(Math.abs(new Date - new Date("5/15/2022")) / 864e5) - 1]));
