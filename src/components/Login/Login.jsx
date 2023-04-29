import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {logIn} = useContext(AuthContext)
    const [show,setShow]=useState(false)
    
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target ;
        const email = form.email.value; 
        const password =  form.password.value;
        logIn(email,password)
        .then(result =>{
            const loggedUser = result.user;
            event.target.reset()
            navigate(from, {replace:true})
        })
        .catch(error =>{
            console.log(error)

        })
        
    }
    return (
        <div>
            <form onSubmit={handleLogin} className='border mt-12 mx-auto rounded  w-[500px] h-[600px] p-10'>
                <h1 className='text-4xl font-normal text-center'>Login</h1>
                <label className='block mt-10' htmlFor="">Email</label>
                <input className='border-2 border-black rounded w-[415px] h-[50px] pl-4 text-2xl ' type="email" name="email" id="" />
                <label className='block mt-10' htmlFor="">Password</label>
                <input className='border-2 border-black rounded w-[415px] h-[50px] pl-4 text-2xl ' type={show ? 'text' : "password"} name="password" id="" />
                <div onClick={()=>setShow(!show)}>
                    {
                        show ? <span>password hide</span> : <span>password show</span>
                    }
                </div>
                <input className='w-[415px] h-[50px] mt-10 rounded bg-red-500 text-xl font-bold cursor-pointer' type="submit" value="Login" />
                <div className='mt-8 text-orange-400'>
                    <Link to='/signup' > Create New Account </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;