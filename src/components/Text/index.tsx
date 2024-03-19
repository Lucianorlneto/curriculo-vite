import React from "react";

interface TextProps {
  className?: string;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ className, children }) => {
  return <p className={`mb-2 ${className}`}>{children}</p>;
};

export default Text;
