import React from "react";

interface SectionProps {
  children: React.ReactNode;
  index: number;
  title: string;
}

const Section: React.FC<SectionProps> = ({ children, index, title }) => {
  return (
    <div className="justify-start mb-12">
      <p className="font-black text-2xl underline underline-offset-8 text-left">
        {index} - {title.toUpperCase()}
      </p>
      {children}
    </div>
  );
};

export default Section;
