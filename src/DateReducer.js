import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading :true,
    error: '',
    post: {}
}
 const reducer = (state, action) => {
     switch(action.type) {
         case 'FETCH_SUCCESS':
             return {
                 loading: false,
                 post: action.payload,
                 error:''
             }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Valami nem stimmel!'
                
            }
        default:
            return state
     }
 }


function DateReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios
            .get('https://api.exchangeratesapi.io/latest')
            .then(response => {
                dispatch({type: 'FETCH_SUCCESS', payload: response.data})
            })
            .catch(error => {
                dispatch({type: 'FETCH_ERROR'})
            })
    }, [])


    return (
        <div>
            {state.loading ? 'Loading' : state.post.date}
            {state.error ? state.error: null}
        </div>
    )
}

export default DateReducer
