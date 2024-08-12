import React from 'react'

function Button({ content,className }) {
    return (
        <button className={`bg-red-500 text-white tex-semibold pl-3 pr-3 pt-2 pb-2 rounded-md ${className}`}>
            {content}
        </button>
    )
}

export default Button