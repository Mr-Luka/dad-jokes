const jokeButton = document.querySelector(".getJoke");
const jokeHolder = document.querySelector(".joke p");

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

async function fetchJoke() {
    const response = await fetch("https://icanhazdadjoke.com", 
    { headers: 
        {Accept: 'application/json',}});
    //turning it into something that is readable
    const joke = await response.json()
    console.log(response)
}
fetchJoke()