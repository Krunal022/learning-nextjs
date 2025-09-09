"use client"
import React, { useState } from 'react'

const page = () => {
  const [A, setA] = useState(0)
  return (
    <div className='page bg-gray-700 min-h-screen flex flex-col justify-center items-center text-3xl font-bold'>
      Welcome to the page!
      <p className='text-black text-xl'>Current value of A: {A}</p>
      <button onClick={() => setA(A + 1)} className='bg-blue-500 text-white px-4 text-sm py-2 rounded'>Increment A</button>
    </div>
  )
}

export default page