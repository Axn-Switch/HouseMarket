import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'

function ForgotPassword() {
  const onChange = (e) =>{
    setEmail(e.target.value)
  }
  
  const onSubmit = async(e) =>{
    e.preventDefault()

    try{
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email)
      toast.success('Email was sent')
    }
    catch(error){
      toast.error('Could not send reset email')
    }
  }
  
  const [email, setEmail] = useState('')

  return (
    <div className="pageConatiner">
      <header>
        <p className="pageHeader">Forgot Password</p>
      </header>
      <main>
        <form onSubmit={onSubmit}>
          <input type="email" className="emailInput" placeholder='email' value={email} id='email' onChange={onChange}/>
          <Link className='forgotPasswordLink' to='/sign-in'>Sign In</Link>

          <div className="signInBar">
            <div className="signInText">Send Reset Link</div>
            <button className="signInButton">
              <ArrowRightIcon fill='#fff' width='34px'height='34px'/>
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default ForgotPassword