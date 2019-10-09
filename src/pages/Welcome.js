import * as React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchList, updateHasEmptyValue } from '../components/show/store/action';
import { useState } from 'react';
import { Search } from '../components/input/Search';
import { ShowList } from '../components/show/List';

const mapStateToProps = reducers => ({
  ...reducers.ShowReducer
});

const mapDispatchToProps = ({
  fetchList,
  updateHasEmptyValue,
});

export const Welcome = connect(
  mapStateToProps,
  mapDispatchToProps,
)(({ fetchList, isFetching, updateHasEmptyValue }) => {
  const [search, setSearch] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(() => {});

  useEffect(() => {
    const isEmpty = 0 === search.length;
    clearTimeout(searchTimeout);
    updateHasEmptyValue(isEmpty);
    if (!isEmpty) {
      setSearchTimeout(setTimeout(() => fetchList({q: search}), 1000));
    }
  }, [fetchList, search, updateHasEmptyValue]);

  return (
    <div className="container">
      <Search
        value={search}
        disabled={isFetching}
        onChange={event => {
          setSearch(event.target.value);
        }} />
      <ShowList/>
    </div>
  )
});
