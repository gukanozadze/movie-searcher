import React, {useEffect} from 'react';
import Header from './Header'
import { connect } from 'react-redux'
import { fetchMovie } from '../actions'


function App(props) {

  useEffect(() => {
    // Default Search Term
    props.fetchMovie('fight club')
  },[])
  
  const {original_title, tagline, overview, poster_path, genres, runtime, revenue} = props.movie
  

  // Checking if movie object is empty
  if(Object.keys(props.movie).length === 0 && props.movie.constructor === Object){
    return <div>Loading</div>
  }

  return (

    <React.Fragment>
      <img src="img/bg_left.png" className="bg_left" alt="bg_left" />

      <div id="wrapper">
        <Header/>

        <main>
          <img className="cover_image" src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt="image_cover" />

          <div id="movie-details">
            <p className="text large bold">{original_title}</p>
            <p className="text orange big semi-bold">
              {tagline}
            </p>
            <p className="text muted">
              {overview}
            </p>

            <div className="rating">

              <div className="rating__score">

                <div className="rating__score--number">
                  60
                </div>
                <div className="rating__score--info">
                  <p className="text muted small bold">
                    METACORE
                  </p>
                  <p className="text muted small bold">
                    From <span className="text bolder dark ">IMDB.COM</span>
                  </p>
                </div>
              </div>
              <div className="rating__popularity">
                <img className="trending" src="img/trending.png" alt="ternding" />
                <div>
                  <p className="text muted small bold">
                    POPULARITY
                  </p>
                  <span className="text dark medium bolder">126</span>
                  <img className="arrow_up" src="img/arrow-up.png" alt="arrow_up" />
                  <span className="text green medium semi-bold">20</span>
                </div>
              </div>
            </div>

            <div className="extra" >

              <div className="card card--black">
                
                <p className="heading text white small bold">
                  GENRE
                </p>
                <p className="text white bold medium">{genres[0].name}</p>
              </div>

              <div className="card card--orange">
                

                <p className="heading text white small bold  ">
                  RUNTIME
                </p>
                <p className="text white medium bold">
                  {runtime} minutes
                </p>
              </div>

              <div className="card card--cyan">
                

                <p className="heading text white small bold ">
                  BOX OFFICE
                </p>
                <p className="text white medium bold">
                  ${revenue.toLocaleString()}

                </p>
              </div>

              <div className="card card--grey">
                

                <p className="heading text white small bold">
                  VOTE AVERAGE
                </p>
                <p className="text white medium bold">Science Fiction</p>
              </div>

            </div>

          </div>
        </main>

      </div>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return({
    movie: state.movie
  })
}
export default connect(mapStateToProps, {fetchMovie})(App);
