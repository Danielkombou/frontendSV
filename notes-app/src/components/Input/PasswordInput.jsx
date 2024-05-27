import React, { useState } from 'react'
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6'

export default function PasswordInput({value, onChange, placeholder}) {

    const [isPassword, setIsPassword] = useState(false)
    const ToggleShowPassword = ()=> {
        setIsPassword(!isPassword)
    }

  return (
    <div className="flex items-center bg-transparent border-[1.5px] 
    rounded mb-3">
        <input type={isPassword ? 'text' : 'password'}
        onChange={onChange}
        value={value}
        placeholder={placeholder || "password"}
        className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none px-5" />

        {isPassword ? 
        (<FaRegEye
        size={22}
        className="text-primary cursor-pointer"
        onClick={()=> ToggleShowPassword()}
        />) : (
        <FaRegEyeSlash 
        size={22}
        className="text-slate-400 cursor-pointer"
        onClick={()=> ToggleShowPassword()}
        />)}
    </div>
  )
}
