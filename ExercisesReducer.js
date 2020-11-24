import { combineReducers } from 'redux';

const INITIAL_STATE = {
  exercises: []
}

const exercisesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  exercises: exercisesReducer
})
