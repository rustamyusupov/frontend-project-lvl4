import * as yup from 'yup';

const minNameLength = 3;
const maxNameLength = 20;

export const channelValidationSchema = yup.object().shape({
  name: yup.string()
    .required()
    .trim()
    .min(minNameLength, 'a minimum of 3 characters is required')
    .max(maxNameLength, 'a maximum of 20 characters is possible'),
});

export const inputValidationSchema = yup.object().shape({
  message: yup.string().trim().min(1, 'a minimum of 1 characters is required'),
});
