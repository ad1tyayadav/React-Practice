import React, { useState } from 'react'

function Inpt({ price, disabled, value, onChange, Currency }) {

  return (
    <div>
      <label
        htmlFor="price"
        className="block text-lg font-bold leading-6 text-gray-900">
        {price}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm"></span>
        </div>
        <input
          type="number"
          name="price"
          id="price"
          className="block input-sec w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="0.00"
          value={value}
          onChange={onChange}
          disabled={disabled} />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label
            htmlFor="currency"
            className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
            <option>{Currency}</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Inpt;