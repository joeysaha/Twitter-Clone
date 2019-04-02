import React from 'react'
import Button from '@material-ui/core/Button'
const LoginButton = (props) => {
    return (
        <Button 
            variant='outlined'
            disabled={props.disabled}
            onClick={props.onClick}
        >
            Login
        </Button>
    )
}

export default LoginButton