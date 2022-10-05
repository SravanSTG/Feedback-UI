import React from "react";

type buttonProps = {
  text: string;
  type: "button" | "submit" | "reset";
  version?: string;
  isDisabled: boolean;
};

const Button: React.FC<buttonProps> = ({ text, type, version, isDisabled }) => {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
      {text}
    </button>
  );
};

export default Button;
