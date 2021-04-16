import React from 'react';
import './styles.css'

const InputGroup = ({name, label, type, onChange}) => {
   
  return(
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} onChange={(e) => onChange(e.target.value)}/>
    </div>
  );
};

export default InputGroup;