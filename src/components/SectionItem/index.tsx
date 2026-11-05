import moment from "moment";
import React, { useMemo } from "react";

const engMonthArray = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const ptMonthArray = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

interface SectionItemProps {
  period?: string;
  time?: string;
  title?: string;
  city?: string;
  description?: React.ReactElement;
  present?: boolean;
}

const SectionItem: React.FC<SectionItemProps> = ({
  city,
  period,
  time,
  title,
  description,
  present,
}) => {
  const timeText = useMemo(() => {
    if (time) return time;

    if (present && period) {
      const startMonth = period.split(" ")[0].toLowerCase();
      const startYear = parseInt(period.split(" ")[1], 10);
      const findMonth = (months: string[]) =>
        months.findIndex((month) => month.toLowerCase() === startMonth);
      const startMonthIndex =
        findMonth(engMonthArray) !== -1
          ? findMonth(engMonthArray)
          : findMonth(ptMonthArray);

      if (startMonthIndex === -1 || isNaN(startYear)) return null;

      // moment months are 0-based, matching the array index
      const startDate = moment([startYear, startMonthIndex, 1]);
      const currentDate = moment();

      const monthsDiff = currentDate.diff(startDate, "M");
      const yearsDiff = currentDate.diff(startDate, "y");

      console.log(monthsDiff % 12, yearsDiff);

      return `${
        yearsDiff < 1
          ? ""
          : yearsDiff > 1
          ? yearsDiff + " years"
          : yearsDiff + " year"
      } ${yearsDiff > 1 && monthsDiff % 12 > 1 ? " and " : ""} ${
        monthsDiff % 12 < 1
          ? ""
          : monthsDiff % 12 > 1
          ? (monthsDiff % 12) + " months"
          : (monthsDiff % 12) + " month"
      }`;
    }

    return null;
  }, [period, present, time]);

  return (
    <div className="flex flex-row pt-6 mb-4">
      <div className="flex flex-col min-w-64 items-start justify-start border-red-700 left-0">
        <div>
          <p className="inline-block font-bold underline text-left items-end mt-1">
            {period}
          </p>
          {timeText && <p className="text-center items-end mt-1">{timeText}</p>}
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
