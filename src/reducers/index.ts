import { ActionType } from '../action'

interface MovieState {
  loading: boolean
  movies: string
  errorMessage: string | null
  
}

interface MovieAction {
  type: ActionType
  payload: string
  error: string
  
}

export const reducer = (state: MovieState, action: MovieAction): MovieState => {
    switch(action.type) {
      case ActionType.SEARCH_MOVIES_REQUEST:
        return {
          ...state,
          loading: true,
          errorMessage: null
        }
      case ActionType.SEARCH_MOVIES_SUCCESS:
        return {
          ...state,
          loading: false,
          movies: action.payload
        }
      case ActionType.SEARCH_MOVIES_FAILURE:
        return {
          ...state,
          loading: false,
          errorMessage: action.error
        }
      default:
        return state
    }
  }