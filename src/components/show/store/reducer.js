import * as show from './action';

const showInitialState = {
  count: 0,
  emptyValue: true,
  errorList: false,
  isFetching: false,
  list: [],
  successList: false,
};

export const ShowReducer = (state = showInitialState, action) => {
  const {payload, type} = action;
  switch (type) {
    case show.DELETE_SHOW_ELEMENT:
      const list = state.list.filter(item => item.show.id !== payload);
      return {
        ...state,
        count: list.length,
        list
      };
    case show.HAS_EMPTY_VALUE_SEARCH:
      return {
        ...state,
        count: 0,
        errorList: false,
        isFetching: false,
        successList: false,
        emptyValue: payload,
      };
    case show.SHOW_LIST_ERROR:
      return {
        ...state,
        count: 0,
        errorList: true,
        isFetching: false,
        successList: false,
      };
    case show.SHOW_LIST_REQUEST:
      return {
        ...state,
        errorList: false,
        isFetching: true,
        successList: false,
      };
    case show.SHOW_LIST_SUCCESS:
      return {
        ...state,
        count: payload.length,
        errorList: false,
        isFetching: false,
        successList: true,
        list: payload,
      };
    default:
      return state;
  }
};
