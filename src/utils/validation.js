import * as Yup from 'yup';

export const productFormValidation = Yup.object({
    product_name: Yup.string().min(3,"Product name should be more then 2 char").required("Product Name is required."),
    price: Yup.string().required("Product Price is required."),
    qty: Yup.number().required("Product Quantity is required."),
    squ: Yup.string().required("Product SQU is required."),
    category: Yup.string().required("Product Category is required."),
    status: Yup.string().required("Product Status  is required."),
    features: Yup.string().required("Product Feature field is required."),
    description: Yup.string().required("Description field is required."),
})