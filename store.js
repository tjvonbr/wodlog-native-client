import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import { config } from './constants/env-variables';
import thunk from 'redux-thunk';

// Endpoint for HTTP request
const exercisesApi = config.exercises;

const initialState = {
  exercises: [],
  status: 'idle'
}

function exercisesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_EXERCISE':
      return {
        ...state,
        exercises: [...state.exercises, action.payload]
      }
    default:
      return state
  }
}

export async function addExercise(dispatch, getState) {
  const response = await axios.get(`${exercisesApi}/`)
  dispatch({ type: 'ADD_EXERCISE', payload: response.data })
}

export const store = createStore(exercisesReducer, applyMiddleware(thunk));

store.dispatch({
  type: 'ADD_EXERCISE',
  payload: "Back squat"
})
