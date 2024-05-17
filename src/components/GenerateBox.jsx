import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { checkLists } from '../store/data'

export const GenerateBox = ({generatePassword, handleShipping, selectedItems, password }) => {
    const passwordStrength = selectedItems.length === 1 ? 'weak' : selectedItems.length === 2 ? 'poor' : selectedItems.length === 3 ? 'medium' : 'very-good'

    const passCheck = (e) => {
        generatePassword()
    }
    
  return (
    <div className='w-full p-2 flex flex-col gap-3'>
        <div className='flex justify-between'>
            <p>Character Length</p>
            <h1>{password.length}</h1>
        </div>
        <form className='flex flex-col'>
            {
                checkLists.map(checklist => {
                    return(
                        <div className='flex gap-3' key={checklist.id}>
                            <input type='checkbox' name='include Uppercase Letters' onChange={handleShipping} value={checklist.id} className='accent-green-400 cursor-pointer'/>
                            <label htmlFor={checklist.name}>{checklist.name}</label>
                        </div>
                    )
                })
            }
        </form>
        <div className='flex justify-between bg-stone-800 p-3'>
            <h1 className='font-medium text-gray-500'>STRENGTH</h1>

            <div className='flex gap-2'>
                <p className='uppercase font-semibold'>
                    {passwordStrength}
                </p>
                <div className='flex gap-1'>
                    <h1 className={`${selectedItems.length > 0 ? 'bg-yellow-400 border-none' : 'bg-inherit'} w-[9px] h-[25px] border-2 border-white`}></h1>
                    <h1 className={`${selectedItems.length > 1 ? 'bg-yellow-400 border-none' : 'bg-inherit'} w-[9px] h-[25px] border-2 border-white`}></h1>
                    <h1 className={`${selectedItems.length > 2 ? 'bg-yellow-400 border-none' : 'bg-inherit'} w-[9px] h-[25px] border-2 border-white`}></h1>
                    <h1 className={`${selectedItems.length > 3 ? 'bg-yellow-400 border-none' : 'bg-inherit'} w-[9px] h-[25px] border-2 border-white`}></h1>
                </div>
            </div>
        </div>
        <button 
            className='bg-green-400 w-full p-2 font-semibold flex items-center justify-center gap-4 text-stone-800 hover:border-2 hover:border-green-400 hover:text-green-400 hover:bg-stone-400 transition ease-in-out duration-300'
            onClick={passCheck}
        >
            <h1>Generate</h1>
            <FontAwesomeIcon icon={faArrowRight} />
        </button>
    </div>
  )
}
