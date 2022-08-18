import { useState, ChangeEvent } from "react";

const useInput = (initailValue: string) => {
  const [value, setValue] = useState(initailValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => setValue("");

  return { value, setValue, onChange, reset };
};

export default useInput;
