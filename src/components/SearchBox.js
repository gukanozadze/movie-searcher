import React from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from '../actions'
import { Field, reduxForm } from 'redux-form'

class SearchBox extends React.Component {

  renderField = ({ input, placeholder, type }) => {
    return <input {...input} placeholder={placeholder} id="input-search" type={type} />
  }

  onSubmit = ({term}) => { this.props.fetchMovie(term) };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} id="search-box">
        <img src="img/search.png" className="search-image" alt="search" />

        <Field
          name="term"
          type="text"
          placeholder="Enter the movie name..."
          component={this.renderField}
        />
      </form>
    )
  }
}


export default connect(null, {fetchMovie})(reduxForm({
  form: 'form', // a unique identifier for this form
})(SearchBox))
