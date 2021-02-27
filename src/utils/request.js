import axios from 'axios';
import { get } from 'lodash/fp';

const request = (url, options) => axios(url, options).then(get('data'));

export default request;
