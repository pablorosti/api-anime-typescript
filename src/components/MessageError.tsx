import React from 'react'
interface IProps {
    message: string
}

export const MessageError = ({ message }: IProps) => {
    return (
        <p className='alert alert-danger'>
            {message}
        </p>
    )
}
