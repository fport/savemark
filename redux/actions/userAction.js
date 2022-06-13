import axios from 'axios'
import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_ADD_BOOKMARK_REQUEST,
    USER_ADD_BOOKMARK_SUCCESS,
    USER_ADD_BOOKMARK_FAIL
} from '../constants/userConstant'

// REGISTER
export const register = ({ name, email, password }) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/users', { name, email, password }, config)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

// LOGIN
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/users/login', { email, password }, config)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

//LOGOUT
export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
}

// ADD BOOKMARK
export const addBookmark = ({ url, desc }) => async (dispatch) => {
    try {
        dispatch({
            type: USER_ADD_BOOKMARK_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/bookmark', { url, desc }, config)

        dispatch({
            type: USER_ADD_BOOKMARK_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_ADD_BOOKMARK_FAIL,
            payload:
                error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
