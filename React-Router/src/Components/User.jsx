import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
    return (
        <div className='bg-gray-600 w-98 h-44 justify-center text-3xl text-white flex items-center' >User: {userid} </div>
    )
}

export default User