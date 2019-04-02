import React from 'react'
import Button from '@material-ui/core/Button'

const SignUpButton = (props) => {
    return (
        <Button variant='outlined' color='primary' onClick={props.onClick}>
            Sign Up
        </Button>
    )
}

export default SignUpButton