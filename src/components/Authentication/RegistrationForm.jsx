import React from "react";
import "../Styles/LoginForm.css";
import "../Styles/RegisterForm.css";
import Background from "../Assets/Images/pexels-polina-tankilevitch-3735715.jpg";
import logo from "../Assets/Images/logo1.png";
import Button from "react-bootstrap/Button";
import { registrationSchema } from "../Utils/Validations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import TextError from "../Component/AlertMesssages/TextError";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
import * as Constant from "../Constants/UrlConstants.jsx";
import { useDispatch } from "react-redux";
import { registerUser } from "../Redux/actions/user_action";

/**
 * @Author: Shubham S11
 * @Date: 07/12/2023
 * @PageName: RegistrationForm
 * @Description: Component for Register admin page.
 */
const RegistrationForm = () => {
  const dispatch = useDispatch();
  // const initialValue = {
  //   nameOfBussiness: "",
  //   businessAddress: "",
  //   billingAddress: "",
  //   telephoneNumber: "",
  //   faxNumber: "",
  //   email: "",
  //   federalTAXIDNumber: "",
  //   primaryContactFirstName: "",
  //   primaryContactLastName: "",
  // };
  const initialValue = {
    firstName: '',
    lastName: '',
    telephoneNumber: '',
    email: '',
    status: false,
    isDeleted: false,
    labs: [{
      businessName: '',
      billingAddress: '',
      faxNumber: '',
      federalTAXIDNumber: '',
      isMultilocation: false,
      addresses: [{
        businessAddress: ''
      }]
    }]
  }
  /**
   * @Author: Shubham S11
   * @Date: 07/12/2023
   * @Method: onSubmit
   * @Description: Component for login page.
   */
  const onSubmit = (values) => {
    console.log(values, "form values");
    const payload ={
      firstName: values.firstName,
      lastName: values.lastName,
      telephoneNumber: values.telephoneNumber,
      email: values.email,
      status: false,
      isDeleted: false,
      labs: [{
        businessName: values.businessName,
        billingAddress: values.billingAddress,
        faxNumber: values.faxNumber,
        federalTAXIDNumber: values.federalTAXIDNumber,
        isMultilocation: values.isMultilocation,
        addresses: [{
          businessAddress: values.businessAddress
        }]
      }]
    }
    dispatch(registerUser(payload));

  };
  return (
    <>
      <img src={Background} alt="" className="login-image" />

      <Formik
        initialValues={initialValue}
        validationSchema={registrationSchema}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        <div className="register-form">
          <Form>
            <div className="Registration-logo">
              <img src={logo} alt="" />
              <strong>
                <p>Register </p>
              </strong>
            </div>

            <div className="register-input row g-3 mt-3">
              <div className="col-md-3 me-5 ms-5">
                <label>Name of Business</label>
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Enter Name of Your Business"
                  name="businessName"
                />
                <ErrorMessage name="nameOfBussiness" component={TextError} />
              </div>

              <div className="col-md-3 me-5 ms-5">
                <label>Business Address</label>
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Business Address"
                  name="businessAddress"
                />
                <ErrorMessage name="businessAddress" component={TextError} />
              </div>

              <div className="col-md-3 me-5 ms-5">
                <label>Billing Address</label>
                <span>(if different from business address)</span>
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Billing Address"
                  name="billingAddress"
                />
                <ErrorMessage name="billingAddress" component={TextError} />
              </div>
            </div>

            <div className="register-input row g-3 mt-3">
              <div className="col-md-3 me-5 ms-5">
                <label>Telephone Number</label>
                <Field name="telephoneNumber" className="form-control">
                  {({ field, form }) => (
                    <InputMask
                      {...field}
                      id="telephoneNumber"
                      mask="(999) 999-9999"
                      placeholder="(123) 456-7890"
                      className="register-input-mask"
                      onChange={(e) => {
                        field.onChange(e);
                        form.setFieldValue(
                          "telephoneNumber",
                          e.target.value.replace(/[/(/) -]/g, "")
                        );
                      }}
                    />
                  )}
                </Field>
                <ErrorMessage name="telephoneNumber" component={TextError} />
              </div>

              <div className="col-md-3 me-5 ms-5">
                <label>FAX Number</label>
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Enter FAX Number"
                  name="faxNumber"
                />
                <ErrorMessage name="faxNumber" component={TextError} />
              </div>

              <div className="col-md-3 me-5 ms-5">
                <label>Business Email Address</label>
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Enter Your bussiness Email Address"
                  name="email"
                />
                <ErrorMessage name="email" component={TextError} />
              </div>
            </div>

            <div className="register-input row g-3 mt-3">
              <div className="col-md-3 me-5 ms-5">
                <label>Federal TAX ID Number</label>
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Federal TAX ID Number"
                  name="federalTAXIDNumber"
                />
                <ErrorMessage name="federalTAXIDNumber" component={TextError} />
              </div>

              <div className="col-md-3 me-5 ms-5">
                <label>Primary Contact First Name</label>
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Primary Contact First Name"
                  name="firstName"
                />
                <ErrorMessage
                  name="primaryContactFirstName"
                  component={TextError}
                />
              </div>

              <div className="col-md-3 me-5 ms-5">
                <label>Primary Contact Last Name</label>
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Primary Contact Last Name"
                  name="lastName"
                />
                <ErrorMessage
                  name="primaryContactLastName"
                  component={TextError}
                />
              </div>
            </div>
            <div className=" register-input row g-3 mt-3">
              <div className="d-flex justify-content-center">
             
                <Field
                  type="checkbox"
                  className="form-check-input "
                  name="isMultilocation"
                  id="flexCheckDefault"                  
                />
                <label classNAme="form-check-label" for="flexCheckDefault">
                  Is Multilocation
                </label>
              </div>
            </div>
            <Button className="registrntion-submit" type="submit">
              Register{" "}
            </Button>
          </Form>
          <span className="regitrstion-login">
            already have an account? <Link className='text-primary' to={Constant.LOGIN}>Login</Link>
          </span>
        </div>
      </Formik>
    </>
  );
};
export default RegistrationForm;
