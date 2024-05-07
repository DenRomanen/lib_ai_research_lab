import scss from "./myButton.module.scss";

import { FC, ReactNode } from "react";

export interface MyButtonProps {
  color: string;
  children: ReactNode;
}

const MyButton: FC<MyButtonProps> = ({ children, color, ...props }) => {
  return (
    <button {...props} className={scss.myButton} style={{ color }}>
      {children}
    </button>
  );
};

export default MyButton;
