import React from 'react'

function Btn({ text, onClick }) {

    return (
        <button
            type="button"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 px-4 relative left-24 mt-3 rounded hover:from-pink-500 hover:to-yellow-500"
            onClick={onClick}>
            {text}
        </button>
    )
}

export default Btn