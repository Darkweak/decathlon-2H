import { fetchShowList } from '../../../saga/show';

export const DELETE_SHOW_ELEMENT = 'DELETE_SHOW_ELEMENT';
export const HAS_EMPTY_VALUE_SEARCH = 'HAS_EMPTY_VALUE_SEARCH';
export const SHOW_LIST_ERROR = 'SHOW_LIST_ERROR';
export const SHOW_LIST_REQUEST = 'SHOW_LIST_REQUEST';
export const SHOW_LIST_SUCCESS = 'SHOW_LIST_SUCCESS';

export const fetchList = payload => async dispatch => fetchShowList({
  dispatch,
  payload,
  type: SHOW_LIST_REQUEST,
});

export const deleteShowElement = payload => ({ payload, type: DELETE_SHOW_ELEMENT });

export const updateHasEmptyValue = payload => ({ type: HAS_EMPTY_VALUE_SEARCH, payload });
