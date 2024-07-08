import React, { useRef } from 'react'
import Cardtext from './Cardtext'

function Foreground() {

    const ref = useRef(null);

    return (
        <div ref={ref} className='flex pl-8 gap-[20px] w-full h-screen absolute z-20 overflow-hidden'>
            <Cardtext reference={ref} />
            <Cardtext reference={ref} />
            <Cardtext reference={ref} />
        </div>
    )
}

export default Foreground