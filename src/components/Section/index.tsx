import React from "react";

interface SectionProps {
  children: React.ReactNode;
  index: number;
  title: string;
}

const Section: React.FC<SectionProps> = ({ children, index, title }) => {
  return (
    <div className="justify-start mb-4 last:mb-0">
      <p className="font-black text-xl underline underline-offset-4 text-left break-after-avoid">
        {index} - {title.toUpperCase()}
      </p>
      {children}
    </div>
  );
};

export default Section;
