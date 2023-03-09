import {
  API_KEY, BASE_URL,
  IMG_URL,
  language
} from './api.js'

window.getMovie = (index) => {
  if (!index) {
    index = Math.round(Math.random() * 250)
  }
  
  fetch(`${BASE_URL}${API_KEY}&${language}&page=${index}`)
  .then(response => {
    if (!response.ok) {
      getMovie()
      } else {
        return response.json()
      }
    })
    .then(data => setMovie(data))
}

function setMovie(movieData){
  const index = Math.round(Math.random() * (movieData.results.length - 1))
  const choosenMovie = movieData.results[index]
  const movieContent = document.querySelector('.movie-data')
  movieContent.classList.add('active')

  movieContent.innerHTML = 
  `<div class="movie-poster">
    <img src='${IMG_URL}${choosenMovie.poster_path}' alt='Poster do filme'>
  </div>
  <div class="movie-info">
    <h2>${choosenMovie.title}</h2>
    <p>${choosenMovie.overview}</p>
  </div>`
}
  
const button = document.querySelector('button')
button.addEventListener('click', () => {
  const movieContent = document.querySelector('.movie-data')
  movieContent.innerHTML = ''
  getMovie()
})