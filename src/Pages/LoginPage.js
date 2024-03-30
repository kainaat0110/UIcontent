import React from 'react'
import '../Css/loginpage.css'
import Login from '../Components/Login'
import Banner from '../Images/banner.png'

export default function LoginPage() {
  return (
    <>
    <div className='bg'>
        <section className='leftbg'>
        </section>
        <section className='rightbg'>
        </section>
        <div className='container'>
            <section className='left'>
              <Login />
            </section>
            <section className='right'>
              <img src={ Banner } style={{height: 400, width: 600, position: 'absolute', right:10, top:10}}/>
            </section>
        </div>
    </div>
        
    </>
  )
}
