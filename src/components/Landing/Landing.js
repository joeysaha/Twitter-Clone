import React, { useReducer, useState } from 'react'
import { Redirect } from 'react-router-dom'
import LoginButton from '../Buttons/LoginButton'
import SignUpButton from '../Buttons/SignUpButton'
import TextField from '@material-ui/core/TextField'

const reducer = (state, action) => {
    switch (action.type) {
        case 'email':
            return {
                ...state,
                email: action.value
            }
        case 'pass':
            return {
                ...state,
                pass: action.value
            }
        case 'init':
            return {
                email: '',
                pass: ''
            }
        default:
            throw new Error();
    }
}

const Landing = (props) => {

    const [credentials, changeCredentials] = useReducer(reducer, {
        email: '',
        pass: ''
    })

    const [isValidUser, setValidUser] = useState(false)
    const [isValidPass, setValidPass] = useState(false)
    const [toNext, setToNext] = useState(false)

    const handleEmailChange = (event) => {
        changeCredentials( { type: 'email', value: event.target.value })
        if (credentials.email.length >= 6) setToNext(true)
    }

    const handlePassChange = (event) => {
        changeCredentials( { type: 'pass', value: event.target.value })
    }

    if (!toNext) {
        return (
            <div>
            Hi I'm the landing
            <TextField
                id='email'
                label='Phone, email, or username'
                type='email'
                name='email'
                autoComplete='email'
                onChange={handleEmailChange}
                value={credentials.email}
                margin='normal'
                variant='outlined'
                />
            <TextField
                id='password'
                label='Password'
                type='password'
                name='password'
                autoComplete='password'
                onChange={handlePassChange}
                value={credentials.pass}
                margin='normal'
                variant='outlined'
                />
            <LoginButton />
            <SignUpButton />
        </div>
        )
    } else {
        return (

            <Redirect to='/main' />
        
        )
    }
}

export default Landing