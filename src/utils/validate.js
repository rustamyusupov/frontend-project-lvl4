import * as yup from 'yup';

const minNameLength = 3;
const maxNameLength = 20;
const minMessageLength = 1;

export const channelValidationSchema = yup.object().shape({
  name: yup.string()
    .required('required')
    .trim()
    .min(minNameLength, 'wrongLength')
    .max(maxNameLength, 'wrongLength'),
});

export const inputValidationSchema = yup.object().shape({
  message: yup.string().trim().min(minMessageLength, 'minimumLength'),
});
