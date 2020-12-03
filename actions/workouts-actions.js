import axios from 'axios'
import { config } from '../constants/env-variables'

const wodsApi = config.wodsApi

export const WORKOUTS_START = "WORKOUTS_START"
export const FETCH_WORKOUTS_SUCCESS = "FETCH_WORKOUTS_SUCCESS"
export const FETCH_WORKOUTS_FAIL = "FETCH_WORKOUTS_FAIL"

// FETCHES WORKOUTS
export const fetchWorkouts = () => dispatch => {
  dispatch({ type: WORKOUTS_START })
    axios.get(`${wodsApi}`)
      .then(res => {
        dispatch({ type: FETCH_WORKOUTS_SUCCESS, payload: res.data })
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: FETCH_WORKOUTS_FAIL, payload: err })
      })
}

export const ADD_WORKOUT_SUCCESS = 'ADD_WORKOUT_SUCCESS'
export const ADD_WORKOUT_FAIL = 'ADD_WORKOUT_FAIL'

// ADDS A WORKOUT
export const addWorkout = workout => dispatch => {
  dispatch({ type: WORKOUTS_START })
  axios.post(`${wodsApi}`, workout)
    .then(res => {
      dispatch({ type: ADD_WORKOUT_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: ADD_WORKOUT_FAIL, payload: err})
    })
}

export const DEL_WORKOUT_SUCCESS = 'DEL_WORKOUT_SUCCESS'
export const DEL_WORKOUT_FAIL =  'DEL_WORKOUT_FAIL'

export const deleteWorkout = id => dispatch => {
  dispatch({ type: WORKOUTS_START })
  axios.delete(`${wodsApi}/${id}`)
    .then(res => {
      dispatch({ type: DEL_WORKOUT_SUCCESS, payload: id })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: DEL_WORKOUT_SUCCESS, payload: err })
    })
}