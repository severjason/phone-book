import * as React from 'react';

const renderField = (props: any) => {
  const { input, label, type, meta: { touched, error } } = props;
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} type={type} placeholder={label}/>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
};

export default renderField;
