import React from 'react'

export const ForgotPassworForm = ({ onSwitch }) => {
  return (
    <form action="" className='space-y-5'>
        <div>
          <label htmlFor="" className='block text-sm font-medium text-gray-800 mb-1.5'>
            Email
          </label>
          <input 
            type="email"
            placeholder='correo@ejemplo.com'
            className='w-full px-3 py-2 border rounded-lg'  
          />
        </div>
        <button
          type='submit'
          className='w-full bg-main-blue text-white  py-2 rounded-lg disabled:opacity50 hover:opacity-90 cursor-pointer'
        >
          Enviar Correo
        </button>
        <p className='text-center text-sm text-gray-600'>
          ¿Recordates tu contraseña?{" "}
          <button
            type='button'
            className='text-main-blue font-medium hover:opacity-80 cursor-pointer'
            onClick={onSwitch}
          >
            Iniciar Sesión
          </button>
        </p>
    </form>
  )
}
