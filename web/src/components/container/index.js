import React from 'react';
import './styles.css';

const Container = (props) => {
  return(
    <div className="container">
      <div className="image">

      </div>
      <div className="content">
        {props.children}
      </div>
    </div>
  );
};

export default Container;