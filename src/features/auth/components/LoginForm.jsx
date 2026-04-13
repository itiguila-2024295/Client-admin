import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';

export const LoginForm = ({ onForgot }) => {

    const navigate = useNavigate();

    const login = useAuthStore((state) => state.login);
    const loading = useAuthStore((state) => state.loading);
    const error = useAuthStore((state) => state.error);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Mandar información al backend para iniciar sesión
        console.log(data);
        const res = login(data);
        if (res.success) {
            navigate("/dashboard");
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
            <div>
                <label htmlFor="emailOrUsername" className='block text-sm font-medium text-gray-800 mb-1.5'>
                    Email o Usuario
                </label>
                <input
                    type="text"
                    id='emailOrUsername'
                    placeholder='correo@ejemplo.com o usuario'
                    className='w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus-ring 2 focus:ring-blue-500'
                    {...register('emailOrUsername', { required: "El correo o usuario es obligatorio" }) }
                /> 
                {errors.emailOrUsername && (
                    <p className='text-red-500 text-sm mt-1'>{errors.emailOrUsername.message}</p>
                )}
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
                    {...register('password', { required: "La contraseña es obligatoria" }) }
                />
                {errors.password && 
                    <p className='text-red-600 text-xs mt-1'>{errors}</p>
                }
            </div>

            {error && (
                <p className='text-red-500 text-sm mt-1'>{error}</p>
            )}

            <button     
                type='submit' 
                className='w-full bg-main-blue text-white  py-2 rounded-lg disabled:opacity50 hover:opacity-90 cursor-pointer'
                disabled = {loading}
            >
                {loading ? "Iniciando..." : "Iniciar sesión"}
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
