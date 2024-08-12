import React from 'react'
import Button from './Button'

function Hero() {
    return (
        <div>
            <div className='w-full h-full flex justify-evenly'>
                <div className="content relative top-32 left-10">
                    <h1 className='font-bold text-8xl w-[38vw]'>YOUR FEET DESERVE THE BEST</h1>
                    <p className='w-[30vw] text-xl text-left font-semibold relative top-10'>Step into comfort and style with our premium footwear, designed to give your feet the care and support they deserve. Experience the perfect blend of quality, innovation, and fashion, because your feet deserve nothing but the best.</p>
                    <div className='gap-16 flex'>
                        <Button className="relative top-20 text-xl font-bold" content="Shop Now" />
                        <Button className="relative top-20 text-xl font-bold bg-white text-black border-2 border-gray-600" content="Category" />
                    </div>
                </div>
                <img className='w-[40vw] object-contain relative top-20' src="/src/assets/Nike.png" alt="Shoes Model" />
            </div>
            <footer className='relative top-40 left-32 text-gray-500 w-40 h-32'>
                <p>Also Available On</p>
                <div className='flex gap-8 relative top-4 cursor-pointer'>
                <img className='w-20 object-contain' src="https://imgs.search.brave.com/vekoY3eXs1RErtxaa2RwBLfoztu26KCybVnWdCk-IN4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Ny83YS9GbGlwa2Fy/dF9sb2dvLnN2Zy81/MTJweC1GbGlwa2Fy/dF9sb2dvLnN2Zy5w/bmc" alt="" srcset="" />
                <img className='w-20 object-contain' src="https://imgs.search.brave.com/8IpOqcqNRXc-08en11EmP8ryL9KNyg2xsx-Ju1tUkb0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDE5Lzc2/Ni8yNDAvbm9uXzJ4/L2FtYXpvbi1sb2dv/LWFtYXpvbi1pY29u/LXRyYW5zcGFyZW50/LWZyZWUtcG5nLnBu/Zw" alt="" srcset="" />
                </div>
            </footer>
        </div>
    )
}

export default Hero