import React from 'react'

export const PasswordLength = ({passwordLength, setPasswordLength}) => {
  return (
    <div className='flex justify-between px-2 py-2 items-center'>
        <h1 className='text-[13px] font-medium'>Set Password Length</h1>
        <input 
            type='number'
            className='text-green-400 text-right outline-none'
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
        />
    </div>
  )
}
