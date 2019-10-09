import React from 'react';

export const Search = ({ ...rest }) => {
  return (
    <div className="field">
      <div className="control">
        <input
          className="input is-large"
          type="text"
          placeholder="Cherchez un truc"
          autoFocus
          {...rest} />
      </div>
    </div>
  )
};
