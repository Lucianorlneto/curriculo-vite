import React from "react";

interface SectionItemProps {
  period?: string;
  time?: string;
  title?: string;
  city?: string;
  description?: React.ReactElement;
}

const SectionItem: React.FC<SectionItemProps> = ({
  city,
  period,
  time,
  title,
  description,
}) => {
  return (
    <div className="flex flex-row pt-6 mb-4">
      <div className="flex flex-col min-w-64 items-start justify-start border-red-700 left-0">
        <div>
          <p className="inline-block font-bold underline text-left items-end mt-1">
            {period}
          </p>
          {time && <p className="text-center items-end mt-1">{time}</p>}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex w-full flex-row mb-1">
          <p className="flex flex-1 font-bold text-2xl text-left mr-8">
            {title}
          </p>
          <p className="w-20 mt-1 italic">{city}</p>
        </div>
        <div className={`pr-4 pt-4 text-left ${title ? "" : "-mt-[70px]"}`}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default SectionItem;
