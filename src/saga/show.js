import {
  SHOW_LIST_ERROR,
  SHOW_LIST_REQUEST,
  SHOW_LIST_SUCCESS
} from '../components/show/store/action';
import { commonFetch, objectToURL } from './common';

export const fetchShowList = action => {
  const {dispatch, payload, type} = action;
  switch (type) {
    case SHOW_LIST_REQUEST:
      return commonFetch({
        dispatch,
        callback: {
          error: SHOW_LIST_ERROR,
          success: SHOW_LIST_SUCCESS,
        },
        path: `/search/shows?${objectToURL(payload)}`,
      });
    default:
      break;
  }
};
