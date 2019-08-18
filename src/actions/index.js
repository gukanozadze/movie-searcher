import themoviedb from '../api/TheMovieDb.js'

export const fetchMovie = (term) => async (dispatch) => {
  console.log(process.env)
  const getMovies = await themoviedb.get(`/search/movie?query=${term}&api_key=782709ded0f0ce309a729d75282a794e`);
  const response = await themoviedb.get(`/movie/${getMovies.data.results[0].id}?api_key=782709ded0f0ce309a729d75282a794e`);

  dispatch({
    type: 'FETCH_MOVIE',
    payload: response.data
  })
}