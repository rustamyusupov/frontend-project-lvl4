import * as yup from 'yup';

const minNameLength = 3;
const maxNameLength = 20;

export const channelValidationSchema = yup.object().shape({
  name: yup.string()
    .required('required')
    .trim()
    .min(minNameLength, 'wrong length')
    .max(maxNameLength, 'wrong length'),
});

export const inputValidationSchema = yup.object().shape({
  message: yup.string().trim().min(1, 'minimum length'),
});
