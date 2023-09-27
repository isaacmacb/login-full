import React from 'react'

function Register () {
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-Up</h2>
                    <form>
                        <div className='mb-3'>
                            <label htmlFor="name"><strong>Name</strong></label>
                            <input type="text" placeholder='Enter name' name='name' className='form-control rounded-0'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email"><strong>Email</strong></label>
                            <input type="email" placeholder='Enter Email' name='email' className='form-control rounded-0'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="password"><strong>Password</strong></label>
                            <input type="password" placeholder='Enter password' name='password' className='form-control rounded-0'/>
                        </div>
                        <button type='submit' className='btn btn-sucess w-100 rounded-0'>Sign Up</button>
                        <p>You are agree to aour terms and policies</p>
                        <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'></button>
                    </form>
            </div>
        </div>
    )
}

export default Register