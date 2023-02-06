import { useState } from "react";

interface UseFormProps {
  target: HTMLInputElement;
}

const useForm = () => {
  const [value, setValue] = useState("");

  function onChange({ target }: UseFormProps) {
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
  };
};

export default useForm;
