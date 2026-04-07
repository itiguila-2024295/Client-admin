import React from 'react'

export const LoginForm = ({ onForgot }) => {
  return (
    <form action="" className='space-y-5'>
        <div>
            <label htmlFor="emailOrUsername" className='block text-sm font-medium text-gray-800 mb-1.5'>
                Email o Usuario
            </label>
            <input 
                type="text" 
                id='emailOrUsername'
                placeholder='correo@ejemplo.com o usuario'
                className='w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus-ring 2 focus:ring-blue-500'
            />
        </div>
        <div>
            <label htmlFor="password" className='block text-sm font-medium text-gray-800 mb-1.5'>
                Contraseña
            </label>
            <input 
                type="password" 
                id='password'
                placeholder='••••••••'
                className='w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-blue-500'
            />
        </div>
        <button type='submit' className='w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer text-sm font-medium'>
            Iniciar Sesión
        </button>
        <p className='text-center text-sm'>
            <button 
                type='button' 
                onClick={onForgot}
                className='text-main-blue hover:underline cursor-pointer text-sm' 
            >
                ¿Olvidaste tu contraseña?
            </button>
        </p>
    </form>
  )
}
