import React, { useState } from 'react'
import Inpt from './Inpt'
import Btn from './Btn'

function InptTab() {

    let [value, setValue] = useState(0);

    const handleInputChange = (e) => {
        setValue(e.target.value); // Update state with input value
    };

    const ConvertedAmount = () => {
        let final = value * 82;
        setValue(final)
    };

    return (
        <div>
            <Inpt disabled={false} Currency="USD" price="From" onChange={handleInputChange} />
            <Btn text="Swap" />
            <Inpt disabled={true} value={value} Currency="INR" price="To" />
            <div className='relative right-6 top-4'>
                <Btn onClick={ConvertedAmount} text="Let's Convert" />
            </div>

        </div>
    )
}

export default InptTab