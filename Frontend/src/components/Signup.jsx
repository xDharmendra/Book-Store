import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

function Signup() {
    return (
        <>
            <div className='flex h-screen items-center justify-center shadow-md'>

                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button>
                <dialog className='w-[600px]'>
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Login</h3>

                        <div className='mt-4 space-y-2'>
                            <span>Name</span>
                            <br />
                            <input type="email" placeholder='Enter your name' className='w-80 px-3 py-1 border rounded outline-none' />
                        </div>

                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded outline-none' />
                        </div>

                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input type="email" placeholder='Enter your email' className='w-80 px-3 border rounded outline-none' />
                        </div>

                        <div className='flex justify-around mt-4'>
                            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700  duration-200 '>Signup</button>
                            <p className='text-md'>Have Account?
                                <button className='underline text-blue-500 cursor-pointer'
                                    onClick={() => document.getElementById("my_modal_2").showModal()}>Login</button>
                                <Login />
                            </p>
                        </div>

                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Signup
