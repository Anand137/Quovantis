import qs from 'querystring';

const responseChecker = async (response) => {
  let error = '';
  let data = {};
  let statusCode = null;
  if (!response.ok) {
    error = 'Something went wrong';
    statusCode = response.status;
  } else {
    statusCode = response.status;
    data = await response.json();
  }
  return {statusCode, error, data};
};

const useFetch = () => {
  const customFetch = (url, method = 'GET', body = false) => {
    const options = {
      method,
      headers,
      credentials: 'include',
    };
    if (body) options.body = qs.stringify(body);
    return fetch(url, options);
  };
  const get = async (endpoint) => {
    const url = `${baseURL}${endpoint}`;
    const response = await customFetch(url, 'GET');
    return responseChecker(response);
  };
  return {
    get,
  };
};
export default useFetch;
