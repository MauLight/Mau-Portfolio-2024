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