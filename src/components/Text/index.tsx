import React from "react";

interface TextProps {
  className?: string;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ className, children }) => {
  return (
    <p className={`mb-1 break-inside-avoid ${className}`}>{children}</p>
  );
};

export default Text;
