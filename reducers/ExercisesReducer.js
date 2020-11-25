import { 
  EXERCISES_START,
  FETCH_EXERCISES_SUCCESS,
  FETCH_EXERCISES_FAIL,
  ADD_EXERCISE_SUCCESS,
  ADD_EXERCISE_FAIL,
  EDIT_EXERCISE_SUCCESS,
  EDIT_EXERCISE_FAIL,
  DEL_EXERCISE_SUCCESS,
  DEL_EXERCISE_FAIL
} from '../actions/actions';

const initialState = {
  exercises: [],
  isLoading: false,
  error: null
}

const exercisesReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetching exercises
    case EXERCISES_START:
      return {
        ...state,
        isLoading: true
      } 
    case FETCH_EXERCISES_SUCCESS:
      return {
        ...state,
        exercises: action.payload,
        isLoading: false
      }
    case FETCH_EXERCISES_FAIL:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        }
    // Adding an exercise
    case ADD_EXERCISE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        exercises: [...state.exercises, action.payload]
      }

    case ADD_EXERCISE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

    case EDIT_EXERCISE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        exercises: state.exercises.map(item => {
          item.id === action.payload.id ? 
          action.payload : 
          item
        })
      }
    case EDIT_EXERCISE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case DEL_EXERCISE_FAIL:
      return {
        ...state,
        isLoading: false,
        exercises: state.exercises.filter(
          exercise => exercise.id != action.payload
        )
      }
    case DEL_EXERCISE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default exercisesReducer;
