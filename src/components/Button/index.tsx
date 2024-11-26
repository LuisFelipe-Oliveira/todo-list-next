import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({children, ...rest}: ButtonProps) => {
  return <button {...rest}>{children}</button>
}

export default Button;