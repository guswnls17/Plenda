import { useState } from 'react'

export default (intialValue) => {
  const [value, setValue] = useState(intialValue);
  const onChange = intialValue => {
    setValue(intialValue.target.checked);
  };
  return { value, onChange, setValue };
};
