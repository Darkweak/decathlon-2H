import React from 'react';

const Common = ({ children, className }) => (
  <div className={`notification column has-text-centered ${ className }`}>
    { children }
  </div>
);

export const Waiting = () => (
  <Common className={'is-warning'}>
    Cherchez un film ou une série
  </Common>
);

export const Fetching = () => (
  <Common className={'is-info'}>
    Requête en cours
  </Common>
);

export const Error = () => (
  <Common className={'is-danger'}>
    Une erreur est survenue, réessayez plus tard
  </Common>
);

export const NotFound = () => (
  <Common className={'is-danger'}>
    Aucun film et aucune série ne correspond à la recherche
  </Common>
);
