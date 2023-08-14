import React from "react";
import { Link } from "react-router-dom";
import BreadCrum from "../../Layouts/BreadCrum";
import { useFormik } from "formik";
import { productFormValidation } from "../../../utils/validation";


const initialValues = {
  product_name: "",
  price: "",
  qty: "",
  squ: "",
  category: "",
  status: "",
  features: "",
  description: "",
};
const ProductForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    
    useFormik({
      initialValues: initialValues,
      validationSchema:productFormValidation,
      onSubmit: (value) => {
        console.log(
          "🚀 ~ file: ProductForm.jsx:10 ~ ProductForm ~ value:",
          value
        );
      },
    });
    console.log("🚀 ~ file: ProductForm.jsx:20 ~ ProductForm ~ errors:", errors)
  return (
    <div>
      <BreadCrum data="Products" />
      <div className="card">
        <div className="card-header">
          <Link to="/super-admin/products" className="btn btn-primary btn-sm">
            Back
          </Link>
        </div>
        <div className="card-body">
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label htmlFor="p_name" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                name="product_name"
                className="form-control"
                id="p_name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.product_name}
              />
              {touched.product_name && errors.product_name? <span className="text-danger">{errors.product_name}</span>:null}
            </div>
            <div className="col-md-6">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="text"
                name="price"
                className="form-control"
                id="price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
              />
              {touched.price && errors.price? <span className="text-danger">{errors.price}</span>:null}

            </div>
            <div className="col-md-6">
              <label htmlFor="qty" className="form-label">
                Quantity
              </label>
              <input
                type="number"
                name="qty"
                className="form-control"
                id="qty"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.qty}
              />
            {touched.qty && errors.qty? <span className="text-danger">{errors.qty}</span>:null}

            </div>
            <div className="col-md-6">
              <label htmlFor="squ" className="form-label">
                SQU No.
              </label>
              <input 
                    type="text" 
                    name="squ" 
                    className="form-control" 
                    id="squ" 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.squ}
                />
                {touched.squ && errors.squ? <span className="text-danger">{errors.squ}</span>:null}

            </div>

            <div className="col-md-6">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <select 
                id="category" 
                name="category" 
                className="form-select"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
                >
                <option value="">-select-</option>
                <option value="Electronic">Electronic</option>
                <option value="Fashan Garment">Fashan Garment</option>
                <option value="Medical">Medical</option>
              </select>
              {touched.category && errors.category? <span className="text-danger">{errors.category}</span>:null}
            </div>
            <div className="col-md-6">
              <label htmlFor="Status" className="form-label">
                Status
              </label>
              <select 
                    id="Status" 
                    name="status" 
                    className="form-select"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.status}
                >
                <option value="">-select-</option>
                <option value="active">Active</option>
                <option value="inactive">InActive</option>
              </select>
              {touched.status && errors.status? <span className="text-danger">{errors.status}</span>:null}
            </div>
            <div className="col-md-6">
              <label htmlFor="Feature" className="form-label">
                Feature
              </label>
              <textarea 
                className="form-control" 
                name="features"
                onChange={handleChange}
                onBlur={handleBlur}
                
            >
                
            </textarea>
            {touched.features && errors.features? <span className="text-danger">{errors.features}</span>:null}
            </div>
            <div className="col-md-6">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea className="form-control" name="description" 
              onChange={handleChange}
                onBlur={handleBlur}></textarea>
                {touched.description && errors.description? <span className="text-danger">{errors.description}</span>:null}
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
