import React from 'react'
import { FcGoogle } from "react-icons/fc";

const Form = () => {
    return (
        <div className='bg-white px-10 py-14 rounded-3xl border-2'>
            <h1 className='text-5xl from-semibold'>Welcome Back</h1>
            <p className='font-medium text-lg text-gray-500 mt-4 mb-4'>Welcome back! Please enter your details.</p>
            <div>
                <div>
                    <label className='text-lg font-medium' >Email</label>
                    <input type="text" className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent' placeholder='Enter your Email' />

                </div>
                <div>
                    <label className='text-lg font-medium' >Password</label>
                    <input type="text" className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent' placeholder='Enter your password' />

                </div>
                <div className='mt-7 flex justify-center items-center'>
                    <div>
                        <input type="checkbox"
                            id='remember' />

                        <label className='ml-2 font-medium text-base' >Remember for 30 days</label>
                    </div>
                    <button className='ml-4 font-medium text-base text-violet-500'>Forgot Password</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-5'>
                    <button className=' active:scale-[.98]  active:duration-75 hover:scale-[1.01] ease-in-out transition-all bg-violet-500 text-white text-lg fond-bold rounded-xl py-3'>Sign in</button>
                    <button className='flex items-center justify-center gap-2 active:scale-[.98]  active:duration-75 hover:scale-[1.01] ease-in-out transition-all border-2 border-gray-200 py-3 rounded-xl'>
                    <FcGoogle className='text-3xl'/>
                        Sign in with Google</button>
                </div>
                <div className='flex mt-8 justify-center items-center'>
                    <p className='font-medium  text-base'>Don't have an account? </p>
                    <button className='text-violet-500 text-base font-medium ml-2'>SIgn up</button>
                </div>

            </div>
        </div>
    )
}

export default Form