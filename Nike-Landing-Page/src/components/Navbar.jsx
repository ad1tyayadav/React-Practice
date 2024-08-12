import React from 'react'
import Button from './Button'

function Navbar() {
    return (
        <div className='w-[90vw] h-full flex'>
            <header className='flex w-full h-full items-center justify-between'>
                <img className='w-full object-contain relative right-80 h-20' src="/src/assets/nike-logos.jpg" alt="Nike Logos" />
                <div className="flex w-[40vw] justify-evenly relative right-[24vw] h-full text-xl cursor-pointer font-bold pointer">
                    <h2>Menu</h2>
                    <h2>Location</h2>
                    <h2>About</h2>
                    <h2>Contact</h2>
                </div>
                <Button className='w-40' content="Buy Now"/>
            </header>
        </div>
    )
}

export default Navbar