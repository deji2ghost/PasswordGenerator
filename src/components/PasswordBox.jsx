import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const PasswordBox = ({ password, setSuccessMessage }) => {

    const copyToClipBoard = () => {
        const el = document.createElement('textarea');
        el.value = password;
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
        setSuccessMessage('Password copied to clipboard')
        setTimeout(() => setSuccessMessage(''), 2000)
    }

  return (
    <div className='flex items-center justify-between bg-stone-400 p-2'>
        <input 
            value={password} 
            className='w-[95%] bg-stone-400 outline-none text-white text-2xl font-medium'
        />
        <FontAwesomeIcon 
            icon={faCopy} 
            className='cursor-pointer'
            onClick={copyToClipBoard}
        />
    </div>
  )
}
