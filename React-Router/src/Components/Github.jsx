import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData();

    return (
        <div className='bg-gray-600 w-98 h-94 justify-center flex-col gap-4 text-3xl text-white flex items-center'>Github Followers: {data.followers}
            <img src={data.avatar_url} alt="avatar" /></div>
    )
}

export default Github

export async function gitInfoLode() {
    const response = await fetch(`https://api.github.com/users/ad1tyayadav`)
    return response.json()
};

