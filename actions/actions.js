import axios from 'axios';
import { config } from '../constants/env-variables';

const exerciseApi = config.exercises;

export const EXERCISES_START = "EXERCISES_START"
export const FETCH_EXERCISES_SUCCESS = "FETCH_EXERCISES_SUCCESS"
export const FETCH_EXERCISES_FAIL = "FETCH_EXERCISES_FAIL"

// Fetches exercises
export const fetchExercises = () => dispatch => {
  dispatch({ type: EXERCISES_START })
  axios.get(`${exerciseApi}`)
    .then(res => {
      console.log("FETCH DATA SUCCESS", res.data);
      dispatch({ type: FETCH_EXERCISES_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_EXERCISES_FAIL, payload: err })
    })
}

export const ADD_EXERCISE_SUCCESS = 'ADD_EXERCISE_SUCCESS'
export const ADD_EXERCISE_FAIL = 'ADD_EXERCISE_FAIL'

// Adds an exercise
export const addExercise = exercise => dispatch => {
  dispatch({ type: EXERCISES_START })
  axios.post(`${exerciseApi}`, { name: exercise })
    .then(res => {
      console.log(res.data);
      dispatch({ type: ADD_EXERCISE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_EXERCISE_FAIL, payload: err })
    })
}

export const EDIT_EXERCISE_SUCCESS = 'EDIT_EXERCISE_SUCCESS'
export const EDIT_EXERCISE_FAIL = 'EDIT_EXERCISE_FAIL'

export const editExercise = (changes, id) => dispatch => {
  dispatch({ type: EXERCISES_START })
  axios.put(`${exerciseApi}/${id}`, { name: changes })
    .then(res => {
      console.log(res.data);
      dispatch({ type: EDIT_EXERCISE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: EDIT_EXERCISE_FAIL, payload: err })
    })
}

export const DEL_EXERCISE_SUCCESS = 'DEL_EXERCISE_SUCCESS'
export const DEL_EXERCISE_FAIL = 'DEL_EXERCISE_FAIL'

export const deleteExercise = id => dispatch => {
  dispatch({ type: EXERCISES_START })
    axios.delete(`${exerciseApi}/${id}`)
      .then(res => {
        console.log(res.data);
        dispatch({ type: DEL_EXERCISE_SUCCESS, payload: res.data })
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: DEL_EXERCISE_FAIL, payload: res.data })
      })
}