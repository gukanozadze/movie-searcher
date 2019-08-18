import themoviedb from '../api/TheMovieDb.js'

export const fetchMovie = (term) => async (dispatch) => {
  const getMovies = await themoviedb.get(`/search/movie?query=${term}&api_key=${process.env.REACT_APP_APIKEY}`);
  const response = await themoviedb.get(`/movie/${getMovies.data.results[0].id}?api_key=${process.env.REACT_APP_APIKEY}`);

  dispatch({
    type: 'FETCH_MOVIE',
    payload: response.data
  })
}