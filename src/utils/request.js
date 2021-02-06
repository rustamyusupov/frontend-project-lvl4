import axios from "axios";
import { get } from "lodash/fp";

const successfulResponses = 200;
const noContent = 204;
const resetContent = 205;
const redirectionMessages = 300;

const checkStatus = (response) => {
  if (
    response.status >= successfulResponses &&
    response.status < redirectionMessages
  ) {
    return response;
  }

  const error = new Error(response.statusText);

  error.response = response;
  throw error;
};

const parse = (response) => {
  if (response.status === noContent || response.status === resetContent) {
    return null;
  }

  return get("data")(response);
};

const request = (url, options) =>
  axios(url, options).then(checkStatus).then(parse);

export default request;
