import React from 'react'
import style from './login.module.css'
import TextField from '@mui/material/TextField';
  import wallpaper from '../../images/wallpaper.jpg'
  import Button from '@mui/material/Button';
  import { useState ,useContext} from 'react';
import { userContext } from '../../App';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
export const Login = () => {
    const{user,setUser} =useContext(userContext)
    const [data, setdata] = useState({ email: "", password: "" });
const[errMessage,setMessage]=useState(null)
const {type}=useParams()
const navigate=useNavigate()
    const handleValue=(e)=>{
        setMessage(null)
        console.log(e.target.name)
        setdata({...data,[e.target.name]:e.target.value})
    }


    async function login() {
        try {
          const response = await axios.post(`${process.env.REACT_APP_PATH}user/signin`, data );
          if (response.status===200) {
            setUser(response.data)
            navigate('/dash')
          }
          else{
            setMessage(response.data.message)
          }
        } catch (error) {
          console.log(error);
          setMessage(error.response.data.message);
        }
      }

      async function signup() {
        try {
          const response = await axios.post(`${process.env.REACT_APP_PATH}user/signup`, data );
          if (response.status===200) {
            setUser(response.data)
            navigate('/dash')
          }
          else{
            setMessage(response.data.message)
          }
        } catch (error) {
          console.log(error);
          setMessage(error.response.data.message);
        }
      }

  return (
    <div  className={style.loginPage}>
        <section className={`${style.loginSection}`}>
            <form className={`${style.form}`}>
            <h1>{type==="signin"? 'Sign In': 'Sign Up'}</h1>
{type==="signup"&&(

<TextField
id="outlined-password-input"
label="name"
type="name"
autoComplete="current-name"
sx={{width:'300px'}}
onChange={handleValue}
name="name"
required
/>
)}
            <TextField
          id="outlined-password-input"
          label="email"
          type="email"
          autoComplete="current-email"
          sx={{width:'300px'}}
          onChange={handleValue}
          name="email"
          required
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"

          autoComplete="current-password"
          sx={{width:'300px'}}
          onChange={handleValue}
          required
        />
        <span className={style.errM}>{errMessage?errMessage:null}</span>
        {
            type==="signin"?(
        <span>Don't Have an account? <Link to='/signup'>Sign Up</Link></span>
                
            ):(
                <span>Have an account? <Link to='/signin'>Sign In</Link></span>

            )
        }

              <Button variant="contained" sx={{background:'black',color:'white'}} onClick={type==="signin"?login:signup}>{type==="signin"? 'Sign In': 'Sign Up'}</Button>

            </form>
      
        </section>
        <section className={style.loginSection}>
<img src={wallpaper} style={{width:'100%',height:'100%',   borderRadius:'25px'
}}/>
        </section>

    </div>
  )
}
