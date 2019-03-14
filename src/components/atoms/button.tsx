import * as React from "react";

interface IProps {
  type?: string;
  value?: string;
  className?: string;
  id?: string;
  dataToggle?: string;
  dataTarget?: string;
  onClick?: any;
  ref?: any;
}
export const Button: React.SFC<IProps> = ({
  type = "button",
  value,
  className,
  id,
  dataToggle = "",
  dataTarget = "",
  onClick,
  ref
}) => {
  return (
    <button
      type={ type }
      className={ className }
      id={ id }
      data-toggle={ dataToggle }
      data-target={ dataTarget }
      onClick={ onClick }
      ref={ ref }
    >
      { value }
    </button>
  );
};
