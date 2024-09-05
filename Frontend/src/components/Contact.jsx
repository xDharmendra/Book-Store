import React from 'react'

function Contact() {
    return (
        <>
            <div className='flex h-screen items-center justify-center'>

                <div className='mt-4 space-y-2'>
                    <h3 className="font-bold text-lg mb-4">Contact</h3>
                    <div className='mt-4 space-y-2'>
                        <h4 className="font-bold text-lg mb-4">Contact</h4>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Name" />
                        </label>
                    </div>
                    <div className='mt-4 space-y-2'>
                        <h4 className="font-bold text-lg mb-4">Email</h4>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="email" />
                        </label>
                    </div>
                    <div className='mt-4 space-y-2'>
                    <h2 className="font-bold text-lg mb-4">Message</h2>
                        <textarea
                            placeholder="Bio"
                            className="textarea textarea-bordered textarea-sm w-full max-w-xs"></textarea>
                    </div>
                </div>

                {/* <div className='mt-4 space-y-2'>
                    <span>Name</span>
                    <br />
                    <input type="text" placeholder='Enter your name' className='w-80 px-3 py-1 border rounded outline-none' {...register("name", { required: true })} />
                    <br />
                    {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                </div>

                <div className='mt-4 space-y-2'>
                    <span>Email</span>
                    <br />
                    <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded outline-none' {...register("email", { required: true })} />
                    <br />
                    {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                </div>

                <div className='mt-4 space-y-2'>
                    <span>Message</span>
                    <br />
                    <input type="password" placeholder='Enter Password' className='w-80 px-3 py-1 border rounded outline-none' {...register("password", { required: true })} />
                    <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
                    <br />
                    {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                </div>

                <div className='flex justify-around mt-4'>
                    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700  duration-200'> Submit</button>
                </div> */}
            </div>
        </>
    )
}

export default Contact
