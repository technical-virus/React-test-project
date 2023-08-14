import React from "react";
import '../Styles/LoginForm.css';
import Background from '../Assets/Images/pexels-polina-tankilevitch-3735715.jpg'
import logo from '../Assets/Images/logo1.png'
import Button from 'react-bootstrap/Button';
import {forgotPasswordSchema } from "../Utils/Validations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import TextError from "../Component/AlertMesssages/TextError";
import * as Constant from '../Constants/UrlConstants.jsx';
import { Link } from "react-router-dom";

/**
 * @Author: Shubham S11
 * @Date: 07/11/2023
 * @Method:ForgotPassword
 * @Description: Component to reset password.
 */
const ForgotPassword = ()=>{
    const initialValue={
        email:""
    }
    /**
 * @Author: Shubham S11
 * @Date: 07/12/2023
 * @Method: onsubmit()
 * @Description: to call method when form is submitted.
 */
    const onSubmit = (values)=>{
        console.log(values, "form values")
    }
    return( 
    <>
    <img src={Background} alt="" className="login-image"/>
    
   <Formik
    initialValues={initialValue}
    validationSchema={forgotPasswordSchema}
    onSubmit={(values)=>{onSubmit(values)}}
   >
    <div className="reset-password-form">
     <Form>
        <div className="login-logo">
        <img src={logo} alt="" className="login-logo"/>
        <strong><p>Reset Password</p></strong>
        </div>

       <div className="login-email">
        <label>email</label>
       <Field
         type="password"
         className="form-control"
         placeholder="enter registered email"
         name="email"
       />
       <ErrorMessage name="newPassword" component={TextError} />
       </div>
       <Button className="login-submit" type="submit">Change Password</Button>
     </Form>
     <Link to = {Constant.PREVIOUS_PAGE}><Button className="login-cancel btn-danger" >Cancel</Button></Link>
    </div>
   
   </Formik>   
    </>
)}
export default ForgotPassword;