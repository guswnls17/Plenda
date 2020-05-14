import { useState } from 'react'

const useInput = intialValue => {
  const [value, setValue] = useState(intialValue);
  const onChange = intialValue => {
    setValue(intialValue.target.checked);
  };
  return { value, onChange, setValue };
};

export default useInput;