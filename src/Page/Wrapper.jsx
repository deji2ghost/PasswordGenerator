import React, { useEffect, useState } from 'react'
import { PasswordBox } from '../components/passwordBox'
import { GenerateBox } from '../components/GenerateBox'
import { PasswordLength } from '../components/PasswordLength';

export const Wrapper = () => {
    const [ password, setPassword] = useState('');
    const [ passwordLength, setPasswordLength ] = useState(12)
    const [ shipping, setShipping ] = useState(false)
    const [ selectedItems, setSelectedItems ] = useState([])
    const [ successMessage, setSuccessMessage ] = useState('')

    const generatePassword = () => {
        console.log('clicked')
        let charset = '';
        let newPassword = ''
        console.log(selectedItems)
        console.log(selectedItems.length)

        if(selectedItems.includes('1')) charset += '!@£$%^&*()';
        if(selectedItems.includes('2')) charset += '0123456789';
        if(selectedItems.includes('3')) charset += 'abcdefghijklmnopqrstuvwxyz'
        if(selectedItems.includes('4')) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

        for ( let i = 0; i < passwordLength; i++){
            console.log(charset)
            newPassword += charset.charAt(Math.floor(Math.random() * charset.length))
        }
        console.log(newPassword)
        setPassword(newPassword)
    }

    const handleShipping = (e) => {
        let isSelected = e.target.checked
        let value = e.target.value
        console.log(value)
        if(isSelected){
            setSelectedItems([...selectedItems, value])
        }else{
            setSelectedItems((prevData) => {
                return(
                    prevData.filter(id => id !== value)
                )
            })
        }
    }

    useEffect(() => {
        console.log(selectedItems)
    })

  return (
    <div className='w-[90%] md:w-[40%] text-white p-3 flex flex-col gap-3'>
        <PasswordBox password={password} successMessage={successMessage} setSuccessMessage={setSuccessMessage}/>
        <div className='bg-stone-400 p-3'>
            <PasswordLength passwordLength={passwordLength} setPasswordLength={setPasswordLength}/>
            <GenerateBox password={password} generatePassword={generatePassword} handleShipping={handleShipping} selectedItems={selectedItems} />
            {
                successMessage && 
                <h1>{successMessage}</h1>
            }
        </div>
    </div>
  )
}
