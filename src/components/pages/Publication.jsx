import React from 'react';

const Publication = ({ title, author, fecha, content }) => {
  return (
    <article className='publication l-block'>
      <div className="publication__container">
        <h2 className="publication__title t3">{title}</h2>
        <span><strong>{author}</strong> a las {fecha}</span>
        <div className="publication__content">
          <p>{content}</p>
        </div>
      </div>
    </article>
  );
};

export default Publication;
