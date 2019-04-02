import React, { useReducer, useState, useEffect, useContext } from 'react'
import { Redirect, Link } from 'react-router-dom'
import Test from '../Contexts/test'
import Validate from '../Functions/Validate'
import LoginButton from '../Buttons/LoginButton'
import SignUpButton from '../Buttons/SignUpButton'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Cookies from 'js-cookie'

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
            return null;
    }
}

const Landing = (props) => {

    const test = useContext(Test)

    const [credentials, changeCredentials] = useReducer(reducer, {
        email: '',
        pass: ''
    })

    const [isValidUser, setValidUser] = useState(false)
    const [isValidPass, setValidPass] = useState(false)
    const [isValidCred, setValidCred] = useState(false)
    const [toNext, setToNext] = useState(false)

    const handleEmailChange = (event) => {
        changeCredentials( { type: 'email', value: event.target.value })
        if (Validate(event.target.value, 'email')) {
            setValidUser(true)
        } else {
            setValidUser(false)
        }
    }

    const handlePassChange = (event) => {
        changeCredentials( { type: 'pass', value: event.target.value })
        if (Validate(event.target.value, 'pass')) {
            setValidPass(true)
        } else {
            setValidPass(false)
        }
    }

    useEffect(() => {
        if (isValidUser && isValidPass) {
            setValidCred(true)
        }
    }, [isValidUser, isValidPass])

    const handleClick = (event) => {
        Cookies.set('bigboicred', credentials.email, { expires: 1})
        test.value=credentials.email
        setToNext(true)
    }

    const handleSignUpClick = (event) => {
        console.log('hehe xd')
    }

    if (!toNext && Cookies.get('bigboicred') === undefined) {
        return (
            <div>
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
            <LoginButton disabled={!isValidCred} onClick={handleClick} />
            <SignUpButton onClick={handleSignUpClick} />
            <LoginButton disabled={false} onClick={handleSignUpClick} />
            <Typography variant='h5'>
                <Link to='/recover' style={{textDecoration: 'none'}}>
                I forgot
                </Link>
            </Typography>
            
        </div>
        )
        // 1st login button is for field
        //2nd login button is for sign up thing
    } else {
        return (
            <Redirect to='/main' />
        )
    }
}

export default Landing