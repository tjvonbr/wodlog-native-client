import { 
  WORKOUT_START,
  FETCH_WORKOUTS_SUCCESS,
  FETCH_WORKOUTS_FAILURE,
  ADD_WORKOUT_SUCCESS,
  ADD_WORKOUT_FAIL,
  DEL_WORKOUT_SUCCESS,
  DEL_WORKOUT_FAIL
} from '../actions/workouts-actions'

const initialState = {
  workouts: [],
  isLoading: false,
  error: null
}

const addWorkout = (state = initialState, action) => {
  switch (action.type) {
    // Fetching workouts
    case WORKOUT_START:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_WORKOUTS_SUCCESS:
      return {
        ...state,
        exercises: action.payload,
        isLoading: false
      }
    case FETCH_WORKOUTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case ADD_WORKOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        workouts: [...state.exercises, action.payload]
      }
    case ADD_WORKOUT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case DEL_WORKOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        workouts: state.workouts.filter(workout => {
          return workout.id != action.payload
        })
      }
    case DEL_WORKOUT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}