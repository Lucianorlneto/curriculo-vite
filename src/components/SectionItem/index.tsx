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
      const startMonth = period.split(" ")[0];
      const startYear = parseInt(period.split(" ")[1], 10);
      // const startDate = new Date(
      //   startYear,
      //   engMonthArray.indexOf(startMonth) || ptMonthArray.indexOf(startMonth),
      //   1
      // );
      const startDate = moment(
        `${startYear}-${
          engMonthArray.indexOf(startMonth) || ptMonthArray.indexOf(startMonth)
        }-01`
      );
      // const currentDate = new Date();
      const currentDate = moment();

      const monthsDiff = currentDate.diff(startDate, "M") - 1;
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
