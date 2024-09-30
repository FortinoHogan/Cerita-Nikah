import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const nav = useNavigate()
    return (
        <div className='grid grid-cols-15'>
            <img onClick={() => nav('/')} className='cursor-pointer w-20 h-20 col-start-2' src="assets/images/logo.png" alt="logo" />
        </div>
    )
}

export default Navbar