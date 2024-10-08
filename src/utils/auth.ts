import * as Yup from 'yup'

export const schema = Yup.object({
  email: Yup.string().email().required('Email is a required field.'),
  password: Yup.string().required('Password is a required field.').min(8, 'Password must be at least 8 characters long.').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/, 'Password must contain at least one uppercase, one number and one special character.')
})

export const schemaTech = Yup.object({
  email: Yup.string().email().required('Email is a required field.').matches(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,5}$/, 'Email must be a valid email address.'),
  password: Yup.string().required('Password is a required field.').min(8, 'Password must be at least 8 characters long.').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/, 'Password must contain at least one uppercase, one number and one special character.')
})

export const schemaEcommerce = Yup.object({
  email: Yup.string().email().required('Email is a required field.').matches(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,5}$/, 'Email must be a valid email address.')
})

export const schemaPhoto = Yup.object({
  password: Yup.string().required('Password is a required field.').min(8, 'Password must be at least 8 characters long.').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/, 'Password must contain at least one uppercase, one number and one special character.')
})

export const schemaPayment = Yup.object({
  email: Yup.string().email().required('Email is a required field.').matches(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,5}$/, 'Email must be a valid email address.'),
  cardNumber: Yup.string().required('Card number is a required field.').matches(/^[0-9]{16}$/, 'Card number must be a 16-digit number.'),
  cardHolder: Yup.string().required('Card holder is a required field.').matches(/^[a-zA-Z ]+$/, 'Card holder name must contain only letters.'),
  cvc: Yup.string().required('CVC is a required field.').matches(/^[0-9]{3}$/, 'CVC must be a 3-digit number.'),
  expDate: Yup.string().required('Expiration date is a required field.').matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiration date must be in MM/YY format.'),
  country: Yup.string().required('Country is a required field.').matches(/^[a-zA-Z ]+$/, 'Country name must contain only letters.'),
  zip: Yup.string().required('ZIP code is a required field.').matches(/^[0-9]{5}$/, 'ZIP code must be a 5-digit number.')
})