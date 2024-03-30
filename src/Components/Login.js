import React , { useState } from 'react'
import logo from '../Images/logo.png'
import '../Css/login.css'


export default function Login() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const content = [
    [
      <>
      <div className="input-box">
      <input required placeholder="User" type="text" />
      <input required placeholder="Password" type="password" />
      <button className="userlogin" type="submit" >Login</button>
      <br></br><br></br><br></br><br></br>
      <p>Don't have an account? <a href="/register">Register</a></p>
      </div>
      </>
      
    ],
    [
      <>
      <div className="input-box">
      <input required placeholder="Admin" type="text" />
      <input required placeholder="Password" type="password" />
      <button className="userlogin" type="submit" >Login</button>
      <br></br><br></br><br></br><br></br>
      <p>Don't have an account? <a href="/register">Register</a></p>
      </div>
      </>
    ],
    [
      <>
      <div className="input-box">
      <input required placeholder="Govern" type="text" />
      <input required placeholder="Password" type="password" />
      <button className="userlogin" type="submit" >Login</button>
      <br></br><br></br><br></br><br></br>
      <p>Don't have an account? <a href="/">Register</a></p>
      </div>
      </>
    ]
  ];
  return (
    <>
      <div className='loginbg'>
      <br></br>
        <img src={logo} style={ { height:70, width: 190} }/>
        <h1 style={{ font: 'Tahoma' , fontSize:30, fontWeight: 400, textShadow: 'rgba(0, 0, 0, 0.35) 0px 0px 15px', color:'#201F6D' } }>Welcome Back</h1>
        <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            User
          </button>
          {/* <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Admin
          </button> */}
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Govern
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <ul key={item}>{item}</ul>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </>
  )
}
