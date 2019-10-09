import React from 'react';
import './styles/item.scss';
import { connect } from 'react-redux';
import { deleteShowElement } from './store/action';

const mapDispatchToProps = ({
  deleteShowElement,
});

const CloseButton = connect(
  null,
  mapDispatchToProps
)(({ deleteShowElement, id }) => <div className="close-button" onClick={() => deleteShowElement(id)}>X</div>);

export const ShowItem = ({ show }) => (
  <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile">
    <CloseButton id={ show.id }/>
    <a href={ show.url }>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={show.image && show.image.medium} alt={`${ show.name } poster`} />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <h1 className="has-text-centered">{ show.name }</h1>
            <span dangerouslySetInnerHTML={{__html: (show.summary || 'Pas de description')}}/>
            <hr/>
            <h3>Genres</h3>
            {
              (show.genres.length && show.genres.map((tag, index) => <ShowTag {...{tag, key: index}} />)) ||
              'Aucun tag'
            }
          </div>
        </div>
      </div>
    </a>
  </div>
);

const ShowTag = ({ tag }) => (
  <span className="tag is-primary is-medium">{ tag }</span>
);
