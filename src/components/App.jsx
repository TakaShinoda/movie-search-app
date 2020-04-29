import React, { useReducer, useEffect } from "react"
import "../App.css"
import { Header } from "./Header"
import { Movie } from "./Movie"
import { Search } from "./Search"
import { reducer } from '../reducers'
import { SEARCH_MOVIES_REQUEST, SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_FAILURE } from '../action'

export const App = () => {
  const initialState = {
    loading: true,
    movies: [],
    errorMessage: null
  }

  const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
      fetch(process.env.REACT_APP_MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch({
          type: SEARCH_MOVIES_SUCCESS,
          payload: jsonResponse.Search
        })
      })
  }, [])

    const search = searchValue => {
      dispatch({
        type: SEARCH_MOVIES_REQUEST
      })
      
      fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=`+ process.env.REACT_APP_MOVIE_API_KEY)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: SEARCH_MOVIES_SUCCESS,
            payload: jsonResponse.Search
          })
        } else {
          dispatch({
            type: SEARCH_MOVIES_FAILURE,
            errorMessage: jsonResponse.Error
          })
        }
      })
    }
    const { movies, errorMessage, loading } = state
    
    return (
     <div className="App">
      <Header text="MOVIE" />
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        {loading && !errorMessage ? (
         <span>loading...</span>
         ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  )
}
