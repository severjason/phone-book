import { Field } from 'redux-form';
import * as React from 'react';
import renderField from './renderField';
import { AsYouType } from 'libphonenumber-js';

const normalizePhone = (value: string) => {
  const onlyNums = value.replace(/[^\d]/g, '');
  return new AsYouType().input(`+${onlyNums}`);
};

const renderPhones = (props: any) => {
  const { fields, meta: { error } } = props;
  return (
    <ul>
      <li>
        <button type="button" onClick={() => fields.push()}>Add Phone</button>
      </li>
      {fields.map((phone: any, index: number) =>
        <li key={index}>
          <button
            type="button"
            title="Remove Hobby"
            onClick={() => fields.remove(index)}
          >
            {`Remove Phone No.${index + 1}`}
          </button>
          <Field
            name={phone}
            type="text"
            component={renderField}
            label={`Phone No.${index + 1}`}
            normalize={normalizePhone}
          />
        </li>
      )}
      {error && <li className="error">{error}</li>}
    </ul>
  );
};

export default renderPhones;
