import React from 'react';
import { connect } from 'react-redux';
import { Error, Fetching, NotFound, Waiting } from '../Notifications';
import { ShowItem } from './Item';

const mapStateToProps = reducers => ({
  ...reducers.ShowReducer
});

export const ShowList = connect(
  mapStateToProps
)(({
  count,
  emptyValue,
  errorList,
  fetchList,
  list,
  successList
}) => (
  <div className="columns is-multiline is-desktop">
    <Count/>
    {
      emptyValue ?
        <Waiting /> :
          errorList ?
            <Error /> :
            successList ?
              <>
                {
                  count ? list.map((item, index) => <ShowItem key={index} {...item}/>) : <NotFound/>
                }
              </>
              : <Fetching />
    }
  </div>
));

const Count = connect(
  mapStateToProps
)(({ count }) => (
  <div className="is-full column has-text-right">
    Total: { count }
  </div>
));
