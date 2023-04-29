import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const SignUp = () => {
    const [error,setError] = useState('')
    const {signIn} = useContext(AuthContext)
    const handelCreateAccount =(event) =>{
        event.preventDefault()
        const form = event.target 
        const email = form.email.value;
        const password = form.password.value;
        const confirm  = form.confirm.value;
        setError('')
        if(password !== confirm){
            setError('Please enter same password ')
            return
        }
        else if(password.length < 6){
            setError('please enter minmum six desigt');
            return
        }
        signIn(email,password)
        .then(result =>{
            const loggedUser = result.user ;
            console.log(loggedUser)
            event.target.reset()
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div>
            <form onSubmit={handelCreateAccount} className='border mt-12 mx-auto rounded  w-[500px] h-[600px] p-10'>
                <h1 className='text-4xl font-normal text-center'>Sign Up</h1>
                <label className='block mt-10' htmlFor="email">Email</label>
                <input className='border-2 border-black rounded w-[415px] h-[50px] pl-4 text-2xl ' type="email" name="email" id="" />
                <label className='block mt-10' htmlFor="password">Password</label>
                <input className='border-2 border-black rounded w-[415px] h-[50px] pl-4 text-2xl ' type="password" name="password" id="" />
                <label className='block mt-10' htmlFor="password">Confirm Password</label>
                <input className='border-2 border-black rounded w-[415px] h-[50px] pl-4 text-2xl ' type="password" name="confirm" id="" />
                <input className='w-[415px] h-[50px] mt-10 rounded bg-red-500 text-xl font-bold cursor-pointer' type="submit" value="Login" />
                <div className='mt-8 text-orange-600'>
                    <Link to='/login' >login </Link>
                </div>
            </form>
            <p>{error}</p>
        </div>
    );
};

export default SignUp;