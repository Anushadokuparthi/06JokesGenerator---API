const btn = document.getElementById('jokeBtn')
const jke = document.getElementById('joke')
const url = 'https://icanhazdadjoke.com/'

btn.addEventListener('click',getRandomJoke)
async function getRandomJoke(){
    const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  jke.innerText = data.joke
}