import moment from "moment";
import React, { useMemo } from "react";
import { getTranslation } from "../../utils/language";

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
  language?: Languages;
}

const SectionItem: React.FC<SectionItemProps> = ({
  city,
  period,
  time,
  title,
  description,
  present,
  language,
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
      const years = Math.floor(monthsDiff / 12);
      const months = monthsDiff % 12;

      const plural = (count: number, singular: string, pluralText: string) =>
        `${count} ${count === 1 ? singular : pluralText}`;
      const yearsText = getTranslation({
        language,
        ptText: plural(years, "ano", "anos"),
        enText: plural(years, "year", "years"),
      });
      const monthsText = getTranslation({
        language,
        ptText: plural(months, "mês", "meses"),
        enText: plural(months, "month", "months"),
      });
      const and = getTranslation({ language, ptText: " e ", enText: " and " });

      return [years > 0 && yearsText, months > 0 && monthsText]
        .filter(Boolean)
        .join(and);
    }

    return null;
  }, [language, period, present, time]);

  const meta = [period, timeText, city].filter(Boolean).join(" · ");

  return (
    <div className="pt-2 mb-1">
      {(title || meta) && (
        <div className="flex flex-row items-baseline mb-1 break-after-avoid">
          <p className="flex-1 font-bold text-xl text-left mr-4">{title}</p>
          <p className="text-right text-sm whitespace-nowrap">{meta}</p>
        </div>
      )}
      <div className="text-left">{description}</div>
    </div>
  );
};

export default SectionItem;
