import React from 'react'
import { useState } from 'react'
import signedin from '../assets/Components/Signedin';
import signedup from '../assets/Components/Signedup';

const Forgot = () => {
   
  const [pass, setPass] = useState("Update Password");
  const [change, setChange] = useState({p:"", r: ""});
  const [error, setError] = useState({});

  const validate = () => {
    const tempError = {}
    if(!change.p) tempError.p = "This field is required!"
    if(!change.r) tempError.r = "This field is required!"
    setError(tempError);
    
    return Object.keys(tempError).length === 0;
  }

  const updatePass = (e) => {
      e.preventDefault();
      if(validate()) {
          setChange({...change, p: "", r: ""});
          setPass("Password Updated")
      }
  }


  

  return (
    <div className='   rounded-2xl container p-20 m-50 ml-90 mt-30 flex-col justify-center items-center min-h-100 max-w-xl' >
      <form onSubmit={updatePass} >
        <div className=' flex-col gap-10' > 
        <input onChange = {(e) => {setChange({...change, p: e.target.value})}}
         value = {change.p} className='input bg-purple-200 rounded-md py-3 text-zinc-700 px-3 min-w-60 mb-3 font-semibold text-l' placeholder='Enter your new password' type='password' />
         {error.p && <p className='text-red-500 mb-2 text-sm'>{error.p}</p>}
        <input onChange = {(e) => {
          setChange({...change, r: e.target.value});
        }} value = {change.r} className='input bg-purple-200 rounded-md py-3 text-zinc-700 px-3 min-w-60 mb-3 font-semibold text-l' placeholder='Re-enter your new password' type='password' />
        {error.p && <p className='text-red-500 mb-2 text-sm'>{error.p}</p>}
        </div>

        <div onClick = {updatePass} className='mt-7 px-3 py-3 active:scale-95 max-w-60 bg-emerald-700 rounded-md text-white font-bold'>{pass}</div>
      </form>
    </div>
  )
}

export default Forgot
