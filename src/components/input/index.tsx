import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...rest }: InputProps) => {
  return <input {...rest}/>
};

export default Input;