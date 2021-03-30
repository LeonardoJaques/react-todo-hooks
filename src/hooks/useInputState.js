import { useState } from 'react';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (initalVal) => {
  const [value, setValue] = useState(initalVal);
  const handleChange = (evt) => {
    setValue(evt.target.value);
  };
  const reset = () => {
    setValue('');
  };
  return [value, handleChange, reset];
};
