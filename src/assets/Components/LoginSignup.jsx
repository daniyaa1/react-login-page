import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import Forgot from '../../pages/Forgot';
import { useNavigate } from 'react-router-dom';
import signedup from './Signedup';
import signedin from './Signedin'; 

const LoginSignup = () => {

    const [formData, setFormData] = useState({name: "", email:"", pass:""});
    const [error, setError] = useState({});

    const validate = () => {
        const tempError = {} 
        if(!formData.name) tempError.name = "Name is required!"
        if(!formData.email) tempError.email = "Email is required!"
        if(!formData.pass) tempError.pass = "Password is required!"

        setError(tempError); // this will update the ui

        return Object.keys(tempError).length === 0; //in js a fn without return defaults to undefined
    }


    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        if(validate()){
                navigate("/signedup", {state :{name:formData.name}});
                setFormData({...formData, name: "", email: "", pass: ""});
                
        }
    }

    const submitHandle = (e) => {
        e.preventDefault();
        if(validate()){
                navigate("/signedin", {state:{name:formData.name}});
                setFormData({...formData, name: "", email: "", pass: ""});
                
        }
    }
        

    return (
    
        <div className= "container p-20 m-50 ml-90 mt-30 flex-col justify-center items-center min-h-100  max-w-xl">
            <div className=" header ml-40 mb-10">
                <div className="text text-purple-900 text-3xl font-bold">sign up</div>
                <div className="Underline min-h-1 max-w-8 bg-purple-900 rounded-md mt-2 ml-10"></div>
            </div>
 
            <form onSubmit = {(e) => {
                submitHandler(e);
                submitHandle(e);
            }} >
            <div className='inputs mt-6'>

                <div  className='input bg-slate-200 rounded-md py-5 px-3 mb-3 text-slate-700  font-md'>
                   <i class="fa-solid fa-user"></i>
                   <input onChange = {(e) => {
                    setFormData({...formData, name: e.target.value});
                }} value = {formData.name} type="text" placeholder=" Enter your name"/>
                </div>
                {error.name && <p className='text-red-500 text-sm mb-2'>{error.name}</p>}

                <div  className='input bg-slate-200 rounded-md py-5 px-3 mb-3 text-slate-700 font-md'>
                   <i class="fa-solid fa-envelope"></i>
                   <input onChange = {(e) => {
                    setFormData({...formData, email: e.target.value});}} value = {formData.email} type="email" placeholder=" Enter your email" />
                </div>
                {error.email && <p className='text-red-500 text-sm mb-2'>{error.email}</p>}

                <div  className='input bg-slate-200 rounded-md py-5 px-3 mb-3 text-slate-700 font-md'>
                   <i class="fa-solid fa-key"></i>
                   <input onChange = {(e) => {
                    setFormData({...formData, pass: e.target.value});}} value = {formData.pass} className='bg-transparent' type="password" placeholder="Enter your password" />
                </div>
                {error.pass && <p className='text-red-500 text-sm mb-2'>{error.pass}</p>}

                <div className='forgot-password text-slate-500'>Forgot Password? <span className='text-purple-900'> <Link to = '/forgot' className='text-purple-900 font-semibold' > Click Here </Link> </span> </div>

                <div className='submit-container flex gap-5 mt-4'>
                    <div onClick = {submitHandler} className='submit px-6 py-2 active:scale-95 bg-purple-800 rounded-full text-white font-bold'>sign up</div>
                    <div onClick = {submitHandle} className='submit px-6 py-2 bg-slate-200 rounded-full text-slate-500 font-bold active:scale-95'>sign in</div>
                </div>
                
            </div>
            </form>
        </div>
        
    )
}

export default LoginSignup;