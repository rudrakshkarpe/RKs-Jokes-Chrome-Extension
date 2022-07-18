fetch('https://icanhazdadjoke.com/slack')
    .then(data=>data.json())
    .then(jokeData =>{
        const joke = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('JokeElement');
        jokeElement.innerHTML = joke;
        document.body.appendChild(jokeElement);
    }
    )