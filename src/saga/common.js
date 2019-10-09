import axios from 'axios';

const BASE_API_PATH = 'https://api.tvmaze.com';

export const objectToURL = value => new URLSearchParams(value).toString();

export async function commonFetch({
  body = null,
  callback,
  dispatch,
  isForm,
  method = 'GET',
  path
}) {
  try {
    let headers = {
      Accept: 'application/json',
    };
    const request = ({
      url: `${ BASE_API_PATH }${ path }`,
      method,
      headers: headers,
      data: body && JSON.stringify(body)
    });
    const res = await axios.request(request);
    dispatch({
      type: callback.success,
      payload: res.data[ 'hydra:member' ] ? res.data[ 'hydra:member' ] : res.data,
      isList: !!res.data[ 'hydra:member' ]
    });
  } catch (e) {
    if (callback) {
      dispatch({
        type: callback.error
      });
    }
  }
}
