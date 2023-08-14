import React from "react";
import '../Styles/LoginForm.css';
import Background from '../Assets/Images/pexels-polina-tankilevitch-3735715.jpg';
import logo from '../Assets/Images/logo1.png';
import Button from 'react-bootstrap/Button';
import { loginSchema } from "../Utils/Validations";
import {Link, NavLink, useNavigate} from "react-router-dom"
import { ErrorMessage, Field, Form, Formik } from "formik";
import TextError from "../Component/AlertMesssages/TextError";
import * as Constant from '../Constants/UrlConstants.jsx';
import { useDispatch, useSelector } from "react-redux";
import { getAllUser, loginUser } from "../Redux/actions/user_action";
import { loginSuccess } from "../Redux/actions/loginAction";
import { useEffect } from "react";
import { TOKEN } from "../Constants/ApiUrls";

/**
 * @Author: Shubham S11
 * @Date: 07/12/2023
 * @PageName: LoginForm
 * @Description: Component for login page.
 */
const LoginForm = ()=>{
 const dispatch = useDispatch();
 const data = useSelector((state)=>state)

 console.log(data,"userslogin");
  let navigate = useNavigate();
    const initialValue={
        username:"",
        password:""
    }
    useEffect(()=>{
      console.log(data?.users,"data")
      if(data?.users == undefined ){
        navigate('/login');
      }else {
        navigate(Constant.PENDING_APPROVAL)
      }
    },[data,navigate])

    const onSubmit = (values)=>{
        dispatch(loginUser(values));
       if(true){
         navigate(Constant.PENDING_APPROVAL)
       }
    }

    return( 
    <>
    <img src={Background} alt="" className="login-image"/>
    
   <Formik
    initialValues={initialValue}
    validationSchema={loginSchema}  
    onSubmit={(values)=>{onSubmit(values)}}
   >
    <div className="login-form">
     <Form>
        <div className="login-logo">
        <img src={logo} alt="" className="login-logo"/>
        <strong><p>Login Account</p></strong>
        </div>

       <div className="login-email">
        <label>Email</label>
       <Field
         type="text"
         className="form-control"
         placeholder="Email Address"
         name="username"
       />
       <ErrorMessage name="username" component={TextError} />
       </div>

       <div className="login-email login-password">
        <label>Password</label>
       <Field
         type="password"
         className="form-control"
         placeholder="Your Password"
         name="password"
       />
       <ErrorMessage name="password" component={TextError}  />
       <NavLink
                  to={Constant.FORGOT_PASSWORD}
                 className="forget-password-link"
               >
                 Forgot password
      </NavLink>

       </div>
        <Button className="login-submit" type="submit">Login</Button>
       <div className="login-hr">
         <hr className="hr-text" data-content="OR"/>
       </div>
     </Form>
     <span className="login-register">Don't have an account? <Link className="text-primary" to={Constant.REGISTER}>Register</Link></span>
    </div>
   </Formik>   
    </>
)}
export default LoginForm;