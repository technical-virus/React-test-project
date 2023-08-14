import React from "react";
import '../Styles/LoginForm.css';
import Background from '../Assets/Images/pexels-polina-tankilevitch-3735715.jpg'
import logo from '../Assets/Images/logo1.png'
import Button from 'react-bootstrap/Button';
import { changePasswordSchema } from "../Utils/Validations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import TextError from "../Component/AlertMesssages/TextError";
import * as Constant from '../Constants/UrlConstants.jsx';
import { Link } from "react-router-dom";

/**
 * @Author: Shubham S11
 * @Date: 07/12/2023
 * @Method: ChangePassword
 * @Description: Component to change password.
 */

const ChangePassword = ()=>{
    const initialValue={
        oldPassword:"",
        newPassword:"",
        confirmPassword:"",
    }
    /**
     * @description : on submit method it will be called when submit button in formik will be clicked. 
     *                Api call and request for payload will be sent from here
     * @param {*} values 
     */
    const onSubmit = (values)=>{
        console.log(values, "form values")
    }
    return( 
    <>
    <img src={Background} alt="" className="login-image"/>
    
   <Formik
    initialValues={initialValue}
    validationSchema={changePasswordSchema}
    onSubmit={(values)=>{onSubmit(values)}}
   >
    <div className="login-form">
     <Form>
        <div className="login-logo">
        <img src={logo} alt="" className="login-logo"/>
        <strong><p>Change Password</p></strong>
        </div>

       <div className="login-email">
        <label>Current Password</label>
       <Field
         type="text"
         className="form-control"
         placeholder="enter old pasword"
         name="currentPassword"
       />
      
       </div>

       <div className="login-email login-password">
        <label>New Password</label>
       <Field
         type="password"
         className="form-control"
         placeholder="enter new pasword"
         name="newPassword"
       />
       <ErrorMessage name="newPassword" component={TextError} />
       </div>
       <div className="login-email login-password">
        <label>Confirm Password</label>
       <Field
         type="password"
         className="form-control"
         placeholder="enter new pasword again"
         name="confirmPassword"
       />
       <ErrorMessage name="confirmPassword" component={TextError} />
       </div>
       <Button className="login-submit" type="submit">Change Password</Button>
     </Form>
     <Link to = {Constant.PREVIOUS_PAGE}><Button className="login-cancel btn-danger" >Cancel</Button></Link>
    </div>
   </Formik>   
    </>
)}
export default ChangePassword;