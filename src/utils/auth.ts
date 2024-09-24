import * as Yup from 'yup'

export const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required()
})