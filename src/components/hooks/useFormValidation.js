import { useState } from 'react';

export const FORM_VALIDATION_TYPE = Object.freeze({
  DATE_RANGE_BACKWARD: Symbol('DATE_RANGE_BACKWARD'),
  NON_EMPTY: Symbol('NON_FALSEY'),
});

const formValidators = Object.freeze({
  /*[FORM_VALIDATION_TYPE.DATE_RANGE_BACKWARD]:
    (name, val) => isBefore()*/
  [FORM_VALIDATION_TYPE.NON_EMPTY]:
    (name, val) => !val && `${name} cannot be empty`,
});

export default function useFormValidation(fields = []) {
  function checkErrors(vals) {
    const errors = [];
    states.forEach(({ key, label, types, setError }) => {
      if (types.length === 0) {
        console.warn('Form validation object is given with empty types.');
        return;
      }
      const errs = types
        .map(type => {
          if (!formValidators[type]) {
            throw new Error(`Form validator with type ${type} does not exist`);
          }
          return formValidators[type](label, vals[key]);
        });
      errors.push(errs[0]);
      setError(errs[0]);
    });
    return errors.filter(Boolean).length === 0;
  }

  const states = fields.map(({ key, label, types }) => {
    const [ error, setError ] = useState(false);
    return {
      key,
      label,
      types,
      error,
      setError
    };
  });

  const errors = states.reduce((accum, { key, error }) => {
    return Object.assign(accum, { [key]: error });
  }, {});

  return [ errors, checkErrors ];
};
