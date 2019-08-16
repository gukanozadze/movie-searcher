export default (state = {}, action) => {
  if(action.type === "FETCH_MOVIE"){
    return {...state, ...action.payload};
  }

  return {...state}
  
}