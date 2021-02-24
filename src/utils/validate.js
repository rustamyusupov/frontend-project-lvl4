import * as yup from 'yup';

const minNameLength = 3;
const maxNameLength = 20;

const channelValidationSchema = yup.object().shape({
  name: yup.string()
    .required()
    .min(minNameLength, 'a minimum of 3 characters is required')
    .max(maxNameLength, 'a maximum of 20 characters is possible'),
});

export default channelValidationSchema;
